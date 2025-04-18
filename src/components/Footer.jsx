import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-center text-white font-light py-2 sm:py-4">
      &copy; {new Date().getFullYear()} • All Rights Reserved •
    </footer>
  );
};

export default Footer;
