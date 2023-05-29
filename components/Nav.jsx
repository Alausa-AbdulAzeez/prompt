import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <nav className="w-full flex justify-between items-center mb-16 pt-3">
      <Link href="/" className="flex gap-2 items-center justify-center">
        <Image src="/assets/images/logo.svg" width={30} height={30} />
        <p className="font-satoshi font-semibold max-sm:hidden text-lg tracking-wide text-black">
          Promptopia
        </p>
      </Link>
    </nav>
  );
};

export default Nav;
