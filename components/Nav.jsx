"use client";

import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="w-full flex justify-between items-center mb-16 pt-3">
      <Link href="/" className="flex gap-2 items-center justify-center">
        <Image src="/assets/images/logo.svg" width={30} height={30} />
        <p className="font-satoshi font-semibold max-sm:hidden text-lg tracking-wide text-black">
          Promptopia
        </p>
      </Link>
      <div className="hidden sm:flex">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5 ">
            <Link
              href="/create-prompt"
              className="bg-black border border-black text-white text-center text-sm font-inter flex justify-center items-center py-1.5 px-5 rounded-full transition-all hover:bg-white hover:text-black"
            >
              Create Post
            </Link>
            <button
              type="button"
              onClick={signOut}
              className="border border-black rounded-full py-1.5 px-5 text-black hover:bg-black hover:text-white text-center text-sm font-inter justify-center items-center"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                width={37}
                height={37}
                alt="profile"
                src="/assets/images/logo.svg"
                className="rounded-full"
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
