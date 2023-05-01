/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/types/Movie";
import { categories, getMovies } from "@/utils/data";

export const revalidate = 86400;

export default async function Documentaries() {
  const { path } = categories[4];

  const response = await getMovies(path);

  const movies: Movie[] = response.data.results;

  return (
    <main className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-col items-center p-6 bg-zinc-800"
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="Capa do filme"
            className="w-full h-full"
          />
          <h3 className="mt-3 mb-3 text-xl text-center sm:text-base">
            {movie.title || movie.name}
          </h3>
          <a
            href={`https://youtube.com/results?search_query=${
              movie.title || movie.name
            } Trailer`}
            className="bg-red-600 rounded-md w-9/12 p-1 text-center uppercase font-semibold hover:bg-red-800"
          >
            Trailer
          </a>
        </div>
      ))}
    </main>
  );
}
