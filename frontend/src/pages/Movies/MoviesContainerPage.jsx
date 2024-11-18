import { useEffect, useState } from "react";
import {
  useGetNewMoviesQuery,
  useGetTopMoviesQuery,
  useGetRandomMoviesQuery,
} from "../../redux/api/movies";
import { useFetchGenresQuery } from "../../redux/api/genre";

const MoviesContainerPage = () => {
  // Fetch data for new movies
  const { data } = useGetNewMoviesQuery();

  // Fetch available genres
  const { data: genres } = useFetchGenresQuery();

  // State to track the currently selected genre
  const [selectedGenre, setSelectedGenre] = useState(null);

  // Handler to update the selected genre when a button is clicked
  const handleGenreClick = (genreId) => {
    setSelectedGenre(genreId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <section className="flex flex-col items-center justify-center w-full py-12">
        {/* Choose For You Section */}
        <div className="w-full lg:max-w-[80rem] mb-16 flex flex-col items-center px-4 sm:px-6 md:px-8">
          <h1 className="mb-8 text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Choose For You
          </h1>
          <div className="w-full max-w-[80rem] bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
            {/* Content for "Choose For You" will go here */}
          </div>
        </div>

        {/* Top Movies Section */}
        <div className="w-full lg:max-w-[80rem] mb-16 flex flex-col items-center px-4 sm:px-6 md:px-8">
          <h1 className="mb-8 text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Top Movies
          </h1>
          <div className="w-full max-w-[80rem] bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
            {/* Content for "Top Movies" will go here */}
          </div>
        </div>

        {/* Choose Movie Section */}
        <div className="w-full lg:max-w-[80rem] mb-8 flex flex-col items-center px-4 sm:px-6 md:px-8">
          {/* Header with genre selection */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-8 gap-6 lg:gap-0">
            <h1 className="text-3xl font-bold text-center lg:text-left bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              Choose Movie
            </h1>

            {/* Genre selection buttons */}
            <nav className="flex flex-wrap justify-center lg:justify-start gap-3">
              {genres?.map((g) => (
                <button
                  key={g._id}
                  onClick={() => handleGenreClick(g._id)} // Call handler with genre ID
                  className={`px-4 py-2 rounded-lg text-sm font-medium ease-in-out border border-gray-700 ${
                    selectedGenre === g._id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" // Active button styles
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:scale-105" // Inactive button styles
                  }`}
                >
                  {g.name} {/* Display genre name */}
                </button>
              ))}
            </nav>
          </div>

          {/* Content area for displaying movies based on selected genre */}
          <div className="w-full max-w-[80rem] bg-gray-800/50 rounded-xl p-6 shadow-lg backdrop-blur-sm">
            {/* Movies related to the selected genre will be rendered here */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoviesContainerPage;
