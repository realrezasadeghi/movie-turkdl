import useDarkMode from "@/hooks/useDarkMode";
import { MdDarkMode, MdSunny } from "react-icons/md";

export default function ToggleDarkMode() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    return (
        <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-800 text-orange-500 rounded-full p-2 mx-2">
            {isDarkMode ? <MdSunny size={20}  /> : <MdDarkMode size={20}  />}
        </button>
    )
}
