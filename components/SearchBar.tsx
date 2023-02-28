import { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";

type SearchBarProps = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  getDefintion: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  word: string;
};

export default function SearchBar({
  handleChange,
  getDefintion,
  word,
}: SearchBarProps) {
  return (
    <form className="flex flex-col md:flex-row justify-center items-center content-around gap-2 py-6">
      <input
        type="text"
        id="first_name"
        placeholder="Hello"
        onChange={(e) => handleChange(e)}
        className="border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 w-3/4"
      />
      <button
        type="submit"
        onClick={(e) => getDefintion(e)}
        disabled={!word}
        className="max-w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <BiSearch size={20} />
      </button>
    </form>
  );
}
