import { Movies } from '@/components/Movie'

export default function MoviesPage() {
  return (
    <main className="grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
      <Movies />
    </main>
  )
}
