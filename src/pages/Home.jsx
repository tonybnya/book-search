import React from "react";
import HomeHero from "../components/HomeHero";
import BookCard from "../components/BookCard";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <div className="py-20 px-10">
        <p className="text-white">Books</p>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
            <BookCard
              book_id={138398}
              cover="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389233242i/138398._SY75_.jpg"
              name="The Walking Dead, Vol. 1: Days Gone Bye"
              authors={["Robert Kirkman"]}
              year={2004}
              rating={4.27}
              url="https://www.goodreads.com/book/show/138398.The_Walking_Dead_Vol_1?from_search=true&from_srp=true&qid=7juS8WeTLw&rank=1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
