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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(query);
      e.currentTarget.select();
    }
  };

  const handleIconClick = () => {
    if (query) {
      onSearch(query);
    }

    document.querySelector('input')?.select();
  };

  return (
    <div className="flex items-center justify-center w-full px-4 relative max-w-[650px]">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className={`p-[12px] text-sm rounded-lg w-full pr-12 pl-4 focus:outline-none transition-all duration-300 ${
          theme === "dark"
            ? "bg-neutral-800 text-neutral-100"
            : "bg-neutral-100 text-black border"
        }`}
      />
      <button
        onClick={handleIconClick}
        className="absolute right-6 p-2 rounded-full focus:outline-none focus:ring-2 transition-all bg-purple-400"
        aria-label="Search"
      >
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
      </button>
    </div>
  );
}
