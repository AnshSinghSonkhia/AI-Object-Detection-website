import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-16 p-4 bg-gradient-to-b from-[#000428]  to-[#004e92]">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <Link href="/">
            <h1 className="flex items-center justify-center gap-3">
              <img src="/icon.png" alt="Logo" className="h-8" />
              <p className="text-2xl font-medium gradient-title">AI Burglar Detector</p>
            </h1>
          </Link>
        </div>
        <div className="flex">
          <Link href="/about">
            <p className="px-3 py-2 font-medium rounded-md text-md hover:text-white gradient-title">
              About
            </p>
          </Link>
          <Link href="/developer">
            <p className="px-3 py-2 font-medium rounded-md text-md gradient-title hover:text-white">
              Developer
            </p>
          </Link>
          {/* Add more links/buttons as needed */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
