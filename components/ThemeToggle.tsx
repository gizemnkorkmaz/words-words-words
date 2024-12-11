import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isDarkMode = theme === "dark";

  return (
    <div className="flex items-center gap-4">
<label
  htmlFor="theme-toggle"
  className="relative inline-block sm:w-12 sm:h-6 w-8 h-[20px] cursor-pointer"
>
  <input
    type="checkbox"
    id="theme-toggle"
    className="opacity-0 w-0 h-0 peer"
    checked={isDarkMode}
    onChange={toggleTheme}
  />
  <span
    className={`absolute inset-0 bg-gray-200 dark:bg-purple-600 rounded-full transition-colors duration-300 peer-checked:bg-purple-600`}
  />
  <span
    className={`absolute left-1 top-1 sm:w-4 sm:h-4 w-3 h-3 bg-white rounded-full transition-transform duration-300 transform sm:peer-checked:translate-x-6 peer-checked:translate-x-3 `}
  />
</label>
      {isDarkMode ? (
        <Moon className="text-purple-600" size={24} />
      ) : (
        <Sun className="text-purple-600" size={24} />
      )}
    </div>
  );
};

export default ThemeToggle;
