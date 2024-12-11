"use client";

import { useEffect } from "react";
import { useDictionary } from "@/context/DictionaryContext";
import { fetchWordData } from "@/lib/api/fetchWord";
import SearchInput from "@/components/SearchInput";
import QueryDisplay from "@/components/QueryDisplay";

export default function Home() {
  const { 
    query, 
    setQuery, 
    searchTerm, 
    setSearchTerm, 
    queryData, 
    hasError,
    setHasError,
    setQueryData,
  } = useDictionary();

  useEffect(() => {
    if (searchTerm) {
      fetchWordData(searchTerm)
        .then((data) => {
          setHasError(false);
          setQueryData(data[0]);
        })
        .catch((error) => {
          setQueryData(null);
          setHasError(true);
          console.error("Error fetching data:", error);
        });
    } else {
      setQueryData(null);
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <SearchInput 
        query={query} 
        setQuery={setQuery} 
        onSearch={(search) => {
          setHasError(false);
          setSearchTerm(search);
        }} 
      />
      <QueryDisplay
        word={queryData?.word || ""}
        phonetic={queryData?.phonetic || ""}
        phonetics={queryData?.phonetics || []}
        meanings={queryData?.meanings || []}
        sourceUrls={queryData?.sourceUrls || []}
        license={queryData?.license || { name: "", url: "" }}
        hasError={hasError}
      />
    </div>
  );
}