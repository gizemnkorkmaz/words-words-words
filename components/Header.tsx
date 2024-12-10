"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import FontDropdown from "@/components/FontDropdown";
import Icon from "./Icon";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [font, setFont] = useState("Sans-serif");

  const handleFontChange = (selectedFont: string) => {
    setFont(selectedFont);
    document.body.style.fontFamily = selectedFont;
  };

  return (
    <header className="flex flex-wrap items-center justify-between py-8 px-6 sm:px-12 lg:px-24 m-auto">
      <Link className="flex items-center gap-2 hover:opacity-60" href="/">
      <Icon name="Book" color={theme === 'dark' ? "purple" : "black"} size="lg" />
      </Link>
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
