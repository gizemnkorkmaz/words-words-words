"use client";

import { useTheme } from "../context/ThemeContext";

export default function SearchInput({
  query,
  setQuery,
  onSearch,
}: {
  query: string;
  setQuery: (value: string) => void;
  onSearch: (query: string) => void;
}) {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(query);
      e.currentTarget.select();
    }
  };

  const handleIconClick = () => {
    if (query) {
      setQuery("");
      onSearch("");
    } else {
      onSearch(query);
    }
    document.querySelector("input")?.select();
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).select();
  };

  return (
    <div className="flex items-center justify-center w-full px-4 relative max-w-[650px]">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        onClick={handleInputClick}
        className={`p-[12px] text-sm rounded-lg w-full pr-12 pl-4 focus:outline-none transition-all duration-300 ${
          isDarkMode ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 text-black border"
        }`}
      />
      <button
        onClick={handleIconClick}
        className="absolute right-6 p-2 rounded-full focus:outline-none focus:ring-2 transition-all bg-purple-400"
        aria-label={query ? "Clear search" : "Search"}
      >
        {query ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M6.225 6.225a.75.75 0 011.06 0L12 10.939l4.715-4.714a.75.75 0 111.06 1.06L13.061 12l4.714 4.715a.75.75 0 01-1.06 1.06L12 13.061l-4.715 4.714a.75.75 0 01-1.06-1.06L10.939 12 6.225 7.285a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17a6 6 0 100-12 6 6 0 000 12zm4.222-1.222L21 20"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
