"use client";

import { useTheme } from "../context/ThemeContext";
import Icon from "./Icon";

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
    }
  };

  const handleIconClick = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center justify-center w-full px-4 relative max-w-[650px]">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className={`p-[10px] text-sm rounded-md w-full pr-12 pl-4 focus:outline-none transition-all duration-300 ${
          theme === "dark"
            ? "bg-neutral-800 text-neutral-100"
            : "bg-neutral-100 text-black border"
        }`}
      />
      <Icon
        name="Search"
        color={theme === "dark" ? "purple" : "gray"}
        size="sm"
        className="absolute right-6 cursor-pointer"
        onClick={handleIconClick}
      />
    </div>
  );
}
