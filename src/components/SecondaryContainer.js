import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-2 md:pl-2 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
          <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.nowUpComingMovies}
          />
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
