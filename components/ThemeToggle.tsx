import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isDarkMode = theme === "dark";

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="theme-toggle" className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          id="theme-toggle"
          className="opacity-0 w-0 h-0 peer"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <span
          className={`absolute inset-0 bg-gray-200 dark:bg-purple-600 rounded-full cursor-pointer transition-colors duration-300 peer-checked:bg-purple-600`}
        />
        <span
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform peer-checked:translate-x-6`}
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
