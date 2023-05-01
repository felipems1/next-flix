import axios from "axios";

const API_KEY = "eb885dfc7301ff6be60fe4c46a83525c";

export const categories = [
  {
    route: "/",
    title: "Em alta",
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    route: "/popular",
    title: "Populares",
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    route: "/comedy",
    title: "Comédias",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  },
  {
    route: "/romances",
    title: "Romances",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    route: "/documentaries",
    title: "Documentários",
    path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
  },
];

export const getMovies = async (path: string) => {
  const response = await axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      language: "pt-BR",
      page: 1,
    },
  });
  return response;
};
