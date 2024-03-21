import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-12 sm:h-16 p-4 bg-gradient-to-b from-[#000428] to-[#004e92] sm:w-full ">
        <div className="flex items-center flex-shrink-0 mr-1 text-white sm:mr-6">
          <Link href="/">
            <h1 className="flex items-center justify-center gap-1.5 sm:gap-3">
              <img src="/icon.png" alt="Logo" className="h-4 sm:h-8" />
              <p className="text-base font-medium tracking-tighter transition-all transform sm:text-2xl gradient-title hover:gradient-title4">AI Burglar Detector</p>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/about">
            <p className="py-2 px-0.5 text-sm font-medium transition-all transform rounded-md sm:px-3 sm:text-xl gradient-title hover:gradient-title4">
              About
            </p>
          </Link>
          <Link href="/developer">
            <p className="px-1 py-2 text-sm font-medium transition-all transform rounded-md sm:px-3 sm:text-xl gradient-title hover:gradient-title4">
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
