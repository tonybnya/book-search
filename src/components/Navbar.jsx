import React from "react";
import logo from "/book.png";

const Navbar = () => {
  return (
    <nav className="text-white flex justify-center items-center gap-4 p-6">
      <img src={logo} className="h-8 w-8" alt="logo image" />
      <span className="text-white text-2xl">
        <svg
          width="4"
          height="30"
          viewBox="-1 -1 4 30"
          fill="none"
          id="svg-511912329_162"
        >
          <line x1="0.517395" x2="0.517395" y2="28" stroke="white"></line>
        </svg>
      </span>

      <h1 className="my-shadow text-white font-medium">Book Search</h1>
    </nav>
  );
};

export default Navbar;
