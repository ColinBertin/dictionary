import clsx from "clsx";
import { useEffect } from "react";

type CardProps = {
  data: {
    phonetics: [{ audio: string }];
    word: string;
  };
  darkMode: boolean;
};

export default function Card({ data, darkMode }: CardProps) {
  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={clsx(darkMode ? "text-white" : "", "px-24 py-28")}>
      <header className="flex justify-around">
        <h1 className="text-8xl">{capitalize(data.word)}</h1>
        <audio controls>
          <source src={data.phonetics[0].audio} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </header>
    </div>
  );
}
