import { useEffect, useState } from "react";

type CardProps = {
  data: {
    word: string;
  };
};

export default function Card({ data }: CardProps) {
  useEffect(() => {
    console.log(data.word);
  }, [data]);
  return (
    <div className="px-24 py-28">
      <header>
        <h1>{data.word}</h1>
      </header>
    </div>
  );
}
