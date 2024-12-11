"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

interface FontDropdownProps {
  font: string;
  theme: string;
  onFontChange: (font: string) => void;
}

const FontDropdown: React.FC<FontDropdownProps> = ({ font, theme, onFontChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleFontSelect = (selectedFont: string) => {
    onFontChange(selectedFont);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isDarkMode = theme === "dark";

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`py-1 px-2 rounded-md flex items-center gap-2 text-[12px] ${
          isDarkMode ? "hover:bg-gray-700 text-white" : "hover:bg-gray-100 text-black"
        }`}
      >
        <span className="font-semibold">{font}</span>
        <ChevronDown size={16} className={isDarkMode ? 'text-white' : ''} />
      </button>
      {isOpen && (
        <div
          className={`absolute my-2 w-36 rounded-md px-2 py-1 shadow-lg z-10 ${
            isDarkMode ? "bg-neutral-800 text-white" : "bg-white text-black"
          }`}
        >
          <div className="py-1">
            {["Sans-serif", "Serif", "Monospace"].map((fontOption) => (
              <button
                key={fontOption}
                onClick={() => handleFontSelect(fontOption)}
                className={`w-full px-3 py-2 rounded-md text-left text-[12px] ${
                  isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                {fontOption}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FontDropdown;
