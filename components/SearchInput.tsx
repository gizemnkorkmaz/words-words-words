"use client"
import Icon from "./Icon";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export default function SearchInput() {
  const { theme } = useTheme();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Searching for:", query);
    }
  };

  const handleIconClick = () => {
    console.log("Searching for:", query);
  };

  return (
    <div className="flex items-center justify-center w-full px-4 relative max-w-[650px]">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
        className={`p-[10px] text-sm rounded-md w-full pr-12 pl-4 focus:outline-none transition-all duration-300 ${theme === 'dark' ? 'bg-neutral-800 text-neutral-100' : 'bg-neutral-100 text-black border'}`}
      />
      <Icon 
        name="Search" 
        color={theme === 'dark' ? "purple" : "gray"} 
        size="sm" 
        className="absolute right-6 cursor-pointer"
        onClick={handleIconClick}
      />
    </div>
  );
}
