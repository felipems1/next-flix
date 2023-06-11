import { Movie } from "@/types/Movie";
import axios from "axios";

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
