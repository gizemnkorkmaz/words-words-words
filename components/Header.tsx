"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useDictionary } from "../context/DictionaryContext";
import ThemeToggle from "@/components/ThemeToggle";
import FontDropdown from "@/components/FontDropdown";
import { Book } from "lucide-react";

export default function Header({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { clearSearch } = useDictionary();
  const [font, setFont] = useState("Sans-serif");

  const handleFontChange = (selectedFont: string) => {
    setFont(selectedFont);
    document.body.style.fontFamily = selectedFont;
  };

  return (
    <header
      className={`w-full max-w-full overflow-hidden flex items-center mt-2 justify-between p-2 sm:px-8 md:px-12 lg:px-16 ${className}`}
    >
      <div
        className="flex items-center gap-2 hover:opacity-60 cursor-pointer min-w-0"
        onClick={clearSearch}
      >
        <Book size={24} />
        <h1 className="text-xs sm:text-sm md:text-base font-bold italic truncate w-full overflow-hidden whitespace-nowrap">
          words, words, words
        </h1>
      </div>
      <div className="flex gap-4 items-center">
        <FontDropdown
          theme={theme}
          font={font}
          onFontChange={handleFontChange}
        />
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}
