"use client";

import React, { useState } from 'react';
import { useTheme } from "../context/ThemeContext";
import { Search, X } from 'lucide-react';

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
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(query);
      e.currentTarget.blur(); // Dismiss keyboard
      e.currentTarget.select(); // Select text
    }
  };
  
  const handleSearchClick = () => {
    onSearch(query);
    const inputElement = document.querySelector("input") as HTMLInputElement;
    inputElement?.blur(); // Dismiss keyboard
    inputElement?.select(); // Select text
  };

  const handleClearClick = () => {
    setQuery("");
    onSearch("");
    document.querySelector("input")?.focus();
  };

  const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
    (e.target as HTMLInputElement).select();
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="flex items-center justify-center w-full px-4 relative max-w-[650px]">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        onClick={handleInputClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`p-[12px] text-sm rounded-lg w-full pr-24 pl-4 focus:outline-none transition-all duration-300 ${
          isDarkMode ? "bg-neutral-800 text-neutral-100" : "bg-neutral-100 text-black border"
        }`}
      />
      <div className="absolute right-6 flex items-center space-x-2">
        {query && (
          <button
            onClick={handleClearClick}
            className={`p-2 rounded-full focus:outline-none focus:ring-2 transition-all 
              ${isDarkMode ? "hover:bg-neutral-700" : "hover:bg-neutral-200"}
              ${isFocused ? "opacity-100" : "opacity-70"}`}
            aria-label="Clear search"
          >
            <X className="w-5 h-5" stroke={isDarkMode ? "white" : "black"} />
          </button>
        )}
        <button
          onClick={handleSearchClick}
          className={`p-2 rounded-full focus:outline-none focus:ring-2 transition-all 
            ${query ? "bg-purple-400" : (isDarkMode ? "hover:bg-neutral-700" : "hover:bg-neutral-200")}
            ${isFocused ? "opacity-100" : "opacity-90"}`}
          aria-label="Perform search"
        >
          <Search 
            className="w-5 h-5" 
            stroke={query ? "white" : (isDarkMode ? "white" : "black")} 
          />
        </button>
      </div>
    </div>
  );
}