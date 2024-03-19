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
              <p className="text-2xl font-medium transition-all transform gradient-title hover:gradient-title4">AI Burglar Detector</p>
            </h1>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link href="/about">
            <p className="px-3 py-2 text-xl font-medium transition-all transform rounded-md gradient-title hover:gradient-title4">
              About
            </p>
          </Link>
          <Link href="/developer">
            <p className="px-3 py-2 text-xl font-medium transition-all transform rounded-md gradient-title hover:gradient-title4">
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
