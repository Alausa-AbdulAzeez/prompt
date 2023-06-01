'use client'

import { useEffect, useState } from 'react'

const Feed = () => {
  // SEARCH TEXT
  const [searchText, setSearchText] = useState('')

  // FUNCTION FOR SETTING SEARCH TEXT
  const handleSearchChange = (e) => {
    setSearchText(e?.target.value)
  }
  // END OF FUNCTION FOR SETTING SEARCH TEXT

  // USE EFFECT TO FETCH FEEDS
  useEffect(() => {
    const getFeed = async () => {
      try {
        const res = await fetch('/api/prompt')
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    getFeed()
  }, [])
  // END OF USE EFFECT TO FETCH FEEDS

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
    </section>
  )
}

export default Feed
