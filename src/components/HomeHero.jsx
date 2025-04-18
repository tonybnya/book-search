import React from "react";
import bg from "/library.jpg";

const HomeHero = () => {
  return (
    <div
      className="min-h-screen overflow-hidden text-white relative"
      // style={{
      //   backgroundImage: "url('/library.jpg')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="absolute opacity-35">
        <img
          src={bg}
          alt="Background illustration"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative font-liter p-10">
        <h1>HomeHero</h1>
      </div>
    </div>
  );
};

export default HomeHero;
