import { Movie } from "@/types/Movie";
import axios from "axios";

const API_KEY = "eb885dfc7301ff6be60fe4c46a83525c";

export const categories = [
  {
    id: 0,
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    id: 1,
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    id: 2,
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  {
    id: 3,
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    id: 4,
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
];

export const getMovies = async (path: string) => {
  const req = await axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      language: "pt-BR",
      page: 1,
    },
  });
  const response: Movie[] = req.data.results;
  return response;
};
