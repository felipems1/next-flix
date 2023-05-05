/* eslint-disable @next/next/no-img-element */
import { Movie } from "@/components/Movie";

export const revalidate = 86400;

interface Props {
  params: {
    id: number;
  };
}

export default function Movies({ params }: Props) {
  const index = params.id;

  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Movie index={index} />
    </>
  );
}
