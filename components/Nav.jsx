'use client'

import Image from 'next/image'
import Link from 'next/link'
import { getProviders, signIn, signOut } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Nav = () => {
  const isUserLoggedIn = true

  // PROVIDERS
  const [providers, setProviders] = useState(null)

  // DROPDOWN STATE
  const [toggleDropdown, SetToggleDropdown] = useState(false)

  // FUNCTION TO TOGGLE DROPDOWN
  const handleDropdownToggle = () => {
    SetToggleDropdown((prev) => !prev)
  }
  //END OF  FUNCTION TO TOGGLE DROPDOWN

  // USEEFFECT TO GET PROVIDERS AS PAGE LOADS
  useEffect(() => {
    const setProviders = async () => {
      try {
        const response = await getProviders()

        setProviders(response)
      } catch (error) {
        console.log(error)
      }
    }
    setProviders()
  }, [])

  // END OF USEEFFECT TO GET PROVIDERS AS PAGE LOADS

  return (
    <nav className='w-full flex justify-between items-center mb-16 pt-3'>
      <Link href='/' className='flex gap-2 items-center justify-center'>
        <Image
          src='/assets/images/logo.svg'
          width={30}
          height={30}
          alt='logo'
        />
        <p className='font-satoshi font-semibold max-sm:hidden text-lg tracking-wide text-black'>
          Promptopia
        </p>
      </Link>

      {/* LARGE SCREEN NAV */}
      <div className='hidden sm:flex'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5 '>
            <Link
              href='/create-prompt'
              className='bg-black border border-black text-white text-center text-sm font-inter flex justify-center items-center py-1.5 px-5 rounded-full transition-all hover:bg-white hover:text-black'
            >
              Create Post
            </Link>
            <button
              type='button'
              onClick={signOut}
              className='border border-black rounded-full py-1.5 px-5 text-black hover:bg-black hover:text-white text-center text-sm font-inter justify-center items-center'
            >
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                width={37}
                height={37}
                alt='profile'
                src='/assets/images/logo.svg'
                className='rounded-full'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    type='button'
                    key={provider?.id}
                    onClick={signIn(provider?.id)}
                    className='rounded-full border border-black bg-black text-white py-1.5 px-5 transition-all hover:bg-white text-center text-sm font-inter flex items-center justify-center'
                  >
                    Sign In
                  </button>
                )
              })}
          </>
        )}
      </div>
      {/* END OF LARGE SCREEN NAV */}

      {/* SMALL SCREEN NAV */}
      <div className='sm:hidden flex'>
        {isUserLoggedIn ? (
          <div className='flex relative'>
            <Image
              width={37}
              height={37}
              alt='profile'
              src='/assets/images/logo.svg'
              className='rounded-full'
              onClick={handleDropdownToggle}
            />
            {toggleDropdown && (
              <div className='absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-white min-w-[210px] flex flex-col gap-2 justify-end'>
                <Link
                  href='/profile'
                  onClick={handleDropdownToggle}
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  onClick={handleDropdownToggle}
                  className='text-sm font-inter text-gray-700 hover:text-gray-500 font-medium'
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={signOut().then(() => handleDropdownToggle)}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    type='button'
                    key={provider?.id}
                    onClick={signIn(provider?.id)}
                    className='rounded-full border border-black bg-black text-white py-1.5 px-5 transition-all hover:bg-white text-center text-sm font-inter flex items-center justify-center'
                  >
                    Sign In
                  </button>
                )
              })}
          </>
        )}
      </div>

      {/* END OF SMALL SCREEN NAV */}
    </nav>
  )
}

export default Nav
