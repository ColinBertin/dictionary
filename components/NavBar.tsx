import { BsBookHalf, BsSunFill, BsMoonFill } from "react-icons/bs";
import { Switch } from "@headlessui/react";
import { clsx } from "clsx";

type NavBarProps = {
  darkMode: boolean;
  handleDarkMode: () => void;
};

export default function NavBar({ darkMode, handleDarkMode }: NavBarProps) {
  return (
    <nav className="flex justify-between py-4 px-6">
      <BsBookHalf size={24} color={clsx(darkMode ? "red" : "green")} />
      <div className="flex gap-4">
        <Switch
          checked={darkMode}
          onChange={handleDarkMode}
          className={`${
            darkMode ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              darkMode ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        {darkMode ? (
          <BsSunFill size={24} color={"white"} />
        ) : (
          <BsMoonFill size={20} />
        )}
      </div>
    </nav>
  );
}
