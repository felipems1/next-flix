/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/components/Movie";

export const revalidate = 86400;

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Movie index={0} />
    </>
  );
}
