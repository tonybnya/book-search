import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Spinner from "../components/Spinner";
import bg from "/library.jpg";

const Home = () => {
  const [keyword, setKeyword] = useState("The alchemist");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = import.meta.env.VITE_RAPIDAPI_URL;
  const API_OPTIONS = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    },
  };

  const fetchBooks = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Replace space with '+'
      let title = keyword.replace(/ /g, "+");
      const response = await fetch(`${BASE_URL}/${title}`, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      console.log(data);
      if (!data || data.length === 0) {
        setError("No books found.");
        setBooks([]);
        return;
      }
      setBooks(data);
    } catch (error) {
      console.error(`Error fetching books: ${error}`);
      setError("Error fetching books. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
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

          <form
            className="flex items-center w-full mx-auto"
            onSubmit={(e) => {
              fetchBooks();
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none"
              placeholder="Search books by title..."
              defaultValue={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                setBooks([]);
              }}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
          <div className="rotate-180 animate-bounce text-4xl text-white">▲</div>
        </div>
      </div>

      <div className="py-20 px-10 flex flex-col items-center">
        <p className="text-white max-sm:text-2xl lg:text-4xl">Books</p>
        {isLoading ? (
          <div className="flex justify-center items-center pt-10">
            <Spinner />
          </div>
        ) : error ? (
          <div className="flex justify-center items-center pt-10">
            <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4">
            {books.map((book) => (
              <BookCard
                book_id={book.book_id}
                cover={book.cover}
                name={book.name}
                authors={book.authors}
                year={book.year}
                rating={book.rating}
                url={book.url}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
