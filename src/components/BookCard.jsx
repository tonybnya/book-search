import React from "react";

const BookCard = ({ book_id, cover, name, authors, year, rating, url }) => {
  return (
    <div key={book_id} className="pt-6">
      <div className="flow-root bg-black text-white rounded-md px-4 pb-8 drop-shadow-lg drop-shadow-white/50">
        <div className="-mt-6 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center h-80 w-40">
            <img
              src={
                // Removes compression to get higher quality
                cover.replace(/._SX50_|._SY75_/gi, "")
              }
              className="p-2 w-64 rounded-md"
              alt={name}
            />
          </div>
          <div className="text-center justify-center items-center">
            <h3 className="mt-4 text-lg font-bold w-full break-words overflow-x-auto text-primary tracking-tight">
              {name}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-secondary">
              {authors[0]} ({year})
            </p>
            <p className="font-bold text-secondary">
              Rating: <span className="text-yellow-400">{rating}</span>
            </p>
            <a href={url} className="mt-4 block text-active underline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
