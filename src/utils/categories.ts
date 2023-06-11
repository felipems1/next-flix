export const categories = [
  {
    id: 0,
    title: "Em alta",
    path: `/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
  },
  {
    id: 1,
    title: "Populares",
    path: `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
  },
  {
    id: 2,
    title: "Comédias",
    path: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`,
  },
  {
    id: 3,
    title: "Romances",
    path: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`,
  },
  {
    id: 4,
    title: "Documentários",
    path: `/discover/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`,
  },
];
