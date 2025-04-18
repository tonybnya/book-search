// import React from "react";
// import logo from "/book.png";
//
// const Navbar = () => {
//   return (
//     <nav className="text-white flex justify-center items-center gap-4 p-6">
//       <img src={logo} className="h-8 w-8" alt="logo image" />
//       <span className="text-white text-2xl">
//         <svg
//           width="4"
//           height="30"
//           viewBox="-1 -1 4 30"
//           fill="none"
//           id="svg-511912329_162"
//         >
//           <line x1="0.517395" x2="0.517395" y2="28" stroke="white"></line>
//         </svg>
//       </span>
//
//       <h1 className="text-white font-medium">Book Search</h1>
//     </nav>
//   );
// };
//
// export default Navbar;

import React from "react";
import logo from "/book.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-2 sm:gap-4 px-4 py-2 sm:p-6 text-white w-full">
      <img src={logo} className="h-6 w-6 sm:h-8 sm:w-8" alt="logo image" />
      <span className="h-5 sm:h-6">
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
