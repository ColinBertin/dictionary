import Head from "next/head";
// import { Inter } from "next/font/google";
import Card from "@/components/Card";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import { SetStateAction, useEffect, useState } from "react";
import clsx from "clsx";

// const inter = Inter({ subsets: ["latin"] });
type Definition = {
  word: string;
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState<Definition>();

  const handleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setWord(e.target.value);
  };

  const getDefintion = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      const response = await fetch(url);
      const data = await response.json();
      setDefinition(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(definition);
  }, [definition]);

  return (
    <div className={clsx(darkMode ? "bg-black" : "", "h-screen w-screen")}>
      <Head>
        <title>My Dictionary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
        <SearchBar
          handleChange={handleChange}
          getDefintion={getDefintion}
          word={word}
        />
        {definition && <Card data={definition} />}
      </main>
    </div>
  );
}
