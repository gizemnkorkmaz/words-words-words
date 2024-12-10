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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 120 120"
          stroke="#c084fc"
          fill="none"
          strokeWidth="4"
          width={24}
          height={24}
        >
          <path d="M63.9 40.4c-1.3-0.3-2.6-0.4-3.9-0.4-12.3 0-22.1 11.1-19.7 23.9 1.5 7.8 7.9 14.2 15.8 15.7 1.3 0.3 2.6 0.4 3.9 0.4 12.3 0 22.1-11.1 19.6-23.9-1.5-7.8-7.9-14.2-15.7-15.7zM65.1 64.2c-1.3 1.5-3.2 2.4-5.1 2.5-0.5 0-1 0-1.4-0.2-2.4-0.5-4.6-2.7-5.1-5.1-0.5-2.7 0.5-4.6 1.3-5.6 1.3-1.5 3.2-2.4 5.2-2.5 0.5 0 0.9 0 1.4 0.2 2.4 0.5 4.6 2.7 5.1 5.1 0.5 2.7-0.5 4.6-1.4 5.6z" />
          <path d="M113.4 66.7h-13.4c-3.7 0-6.6-3-6.6-6.7v0c0-3.7 3-6.6 6.6-6.7h13.4c3.7 0 6.6 3 6.7 6.7v0c0 3.7-3 6.6-6.7 6.7z" />
          <path d="M60 93.3h0c-3.7 0-6.6 3-6.7 6.7v13.4c0 3.7 3 6.6 6.7 6.6h0c3.7 0 6.6-3 6.7-6.6v-13.4c0-3.7-3-6.6-6.7-6.7z" />
          <path d="M60 26.7h0c3.7 0 6.6-3 6.7-6.7v-13.4c0-3.7-3-6.6-6.7-6.6h0c-3.7 0-6.6 3-6.7 6.6v13.4c0 3.7 3 6.6 6.7 6.7z" />
          <path d="M26.6 60v0c0-3.7-3-6.6-6.6-6.7h-13.4c-3.7 0-6.7 3-6.7 6.7v0c0 3.7 3 6.6 6.7 6.7h13.4c3.7 0 6.7-3 6.6-6.7z" />
          <path d="M97.4 31.5l7.5-7.5c2.5-2.5 2.5-6.4 0-8.8s-6.4-2.5-8.9 0l-7.5 7.4c-2.5 2.5-2.5 6.4 0 8.9 2.5 2.5 6.4 2.5 8.9 0z" />
          <path d="M24 15.2c-2.5-2.5-6.4-2.5-8.9 0-2.5 2.5-2.5 6.4 0 8.8l7.5 7.5c2.5 2.5 6.4 2.5 8.9 0 2.5-2.5 2.5-6.4 0-8.9l-7.5-7.4z" />
          <path d="M22.6 88.5l-7.5 7.5c-2.5 2.5-2.5 6.4 0 8.8 2.5 2.5 6.4 2.5 8.9 0l7.5-7.4c2.5-2.5 2.5-6.4 0-8.9-2.5-2.5-6.4-2.5-8.9 0z" />
          <path d="M97.4 88.5c-2.5-2.5-6.4-2.5-8.9 0-2.5 2.5-2.5 6.4 0 8.9l7.5 7.4c2.5 2.5 6.4 2.5 8.9 0 2.5-2.5 2.5-6.4 0-8.8l-7.5-7.5z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 120 120"
          stroke="#c084fc"
          fill="none"
          width={24}
          height={24}
          strokeWidth="7.5"
        >
          <path
            d="M37.5 31.9c0-7.2 1.1-14.4 3.8-20.6C23.3 19 11.3 37.3 11.3 58.1c0 28 22.7 50.6 50.6 50.6 20.8 0 39.1-12.1 46.9-30-6.2 2.7-13.5 3.8-20.7 3.8-28 0-50.6-22.7-50.6-50.6Z"
            fill="none"
            strokeWidth="7.5"
          />
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;
