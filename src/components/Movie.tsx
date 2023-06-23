"use client";
import { Movie } from "@/types/Movie";
import { getMovies } from "@/utils/api";
import { categories } from "@/utils/categories";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Movie() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const { slug } = useParams();

  let path = ''

  const index = categories.findIndex(item => item.param === slug)

  if(index > -1) {
    path = categories[index].path
  }

  useEffect(() => {
    const reqMovies = async () => {
      await getMovies(path).then((res) => {
        setMovies(res);
      });
    };
    reqMovies();
  }, [path, slug]);

  return (
    
  <>
  {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-col items-center p-6 bg-zinc-800"
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="Capa do filme"
            className="w-full h-full"
            priority
            width={200}
            height={300}
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
  </>
  );
}
