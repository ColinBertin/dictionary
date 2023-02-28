import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <div className="h-screen w-screen">
      <Head>
        <title>My Dictionary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
      </main>
    </div>
  );
}
