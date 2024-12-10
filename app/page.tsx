"use client";

import { useState, useEffect } from "react";
import { fetchWordData } from "@/lib/api/fetchWord";
import SearchInput from "@/components/SearchInput";
import QueryDisplay from "@/components/QueryDisplay";

interface WordData {
  word: string;
  phonetic: string;
  phonetics: { text: string; audio: string }[];
  meanings: { partOfSpeech: string; definitions: { definition: string; example: string }[] }[];
  sourceUrls: string[];
  license: { name: string; url: string };
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [queryData, setQueryData] = useState<WordData | null>(null);

  const handleSearch = (search: string) => {
    setSearchTerm(search);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchWordData(searchTerm)
        .then((data) => setQueryData(data[0]))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setQueryData(null);
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <SearchInput query={query} setQuery={setQuery} onSearch={handleSearch} />
      <QueryDisplay
        word={queryData?.word || ""}
        phonetic={queryData?.phonetic || ""}
        phonetics={queryData?.phonetics || []}
        meanings={queryData?.meanings || []}
        sourceUrls={queryData?.sourceUrls || []}
        license={queryData?.license || { name: "", url: "" }}
      />
    </div>
  );
}