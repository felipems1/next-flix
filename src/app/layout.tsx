import Link from "next/link";
import "../styles/globals.css";
import { categories } from "@/utils/data";

export const metadata = {
  title: "Next Flix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">
        <div className="h-screen flex">
          <aside className="w-52 fixed h-screen bg-zinc-800 p-6 sm:w-40">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <h3 className="uppercase text-red-600 font-bold text-base mt-5">
              Next Flix
            </h3>
            <nav className="space-y-5 mt-5">
              {categories.map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.id}`}
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
  );
}
