import React from "react";
import logo from "/book.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-4 h-20 p-4 text-white w-full">
      <img src={logo} className="h-6 w-6 sm:h-8 sm:w-8" alt="logo image" />
      <span className="h-6 animate-pulse">
        <svg
          width="4"
          height="100%"
          viewBox="0 0 4 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="2" y1="0" x2="2" y2="30" stroke="white" strokeWidth="1" />
        </svg>
      </span>
      <h1 className="text-base sm:text-2xl font-medium text-white whitespace-nowrap">
        Book Search
      </h1>
    </nav>
  );
};

export default Navbar;
