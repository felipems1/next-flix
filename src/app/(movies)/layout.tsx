import Link from 'next/link'
import '../../styles/globals.css'
import { categories } from '@/utils/categories'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Next Flix',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">
        <div className="flex h-screen">
          <aside className="fixed h-screen w-52 bg-zinc-800 p-6 sm:w-40">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <h3 className="mt-5 text-base font-bold uppercase text-red-600">
              Next Flix
            </h3>
            <nav className="mt-5 space-y-5">
              {categories.map((item) => (
                <Link
                  key={item.id}
                  href={item.param}
                  className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:text-zinc-500"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>
          <main className="ml-52 p-5 sm:ml-40">{children}</main>
        </div>
      </body>
    </html>
  )
}
