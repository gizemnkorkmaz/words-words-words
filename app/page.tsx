"use client";

import { useEffect } from "react";
import { useDictionary } from "@/context/DictionaryContext";
import { fetchWordData } from "@/lib/api/fetchWord";
import SearchInput from "@/components/SearchInput";
import QueryDisplay from "@/components/QueryDisplay";

export default function Home() {
  const {
    searchTerm,
    setSearchTerm,
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
    <div className="flex flex-grow flex-col items-center p-4 space-y-4">
      <SearchInput
        onSearch={(search: string) => {
          setHasError(false);
          setSearchTerm(search);
        }}
      />
      <QueryDisplay />
    </div>
  );
}
