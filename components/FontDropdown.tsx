"use client";
import { useState } from "react";
import Image from "next/image";

interface FontDropdownProps {
  font: string;
  theme: string;
  onFontChange: (font: string) => void;
}

export default function FontDropdown({ font, theme, onFontChange }: FontDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFontSelect = (selectedFont: string) => {
    onFontChange(selectedFont);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`p-3 rounded-md flex items-center gap-2 text-[12px] ${
          theme === "dark" ? "hover:bg-gray-700 text-white" : "hover:bg-gray-100 text-black"
        }`}
      >
        <span className="font-semibold">{font}</span>
        <Image
          src="/chevron-down.svg"
          alt="Font Selector"
          width={16}
          height={16}
          className={`${theme === "dark" ? "invert" : ""}`}
        />
      </button>
      {isOpen && (
        <div
          className={`absolute my-2 w-36 rounded-md px-2 shadow-lg z-10 ${
            theme === "dark" ? "bg-neutral-800 opacity-90 text-white" : "bg-white text-black"
          }`}
        >
          <div className="py-1">
            {["Sans-serif", "Serif", "Monospace"].map((fontOption) => (
              <button
                key={fontOption}
                onClick={() => handleFontSelect(fontOption)}
                className={`w-full px-3 py-2 rounded-md text-left text-[12px] ${
                  theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100 rounded-md"
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
}