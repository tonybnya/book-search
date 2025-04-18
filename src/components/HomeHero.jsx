import React from "react";
import bg from "/library.jpg";

const HomeHero = () => {
  return (
    <div className="min-h-screen overflow-hidden text-white relative flex items-center justify-center">
      <div className="absolute opacity-25">
        <img
          src={bg}
          alt="Background illustration"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative font-liter text-white flex flex-col items-center justify-center gap-8 w-full max-w-xl px-4">
        <div className="max-sm:text-2xl lg:text-4xl font-bold">
          <span className="text-blue-700">Book</span> Search
        </div>

        <form className="flex items-center w-full mx-auto">
          <label for="simple-search" className="sr-only">
            Search
          </label>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            placeholder="Search books by title..."
            required
          />
          <button
            type="submit"
            className="cursor-pointer px-4 py-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-950 hover:border-blue-950 hover:scale-105"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="rotate-180 animate-bounce text-4xl text-white">▲</div>
      </div>
    </div>
  );
};

export default HomeHero;
