import { Movie } from "@/components/Movie";

export default function Movies() {
  return (
    <main className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1">
      <Movie />
    </main>
  )
}
