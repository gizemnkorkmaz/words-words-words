"use client";

import { useEffect } from "react";
import { useDictionary } from "@/context/DictionaryContext";
import { fetchWordData } from "@/lib/api/fetchWord";
import SearchInput from "@/components/SearchInput";
import QueryDisplay from "@/components/QueryDisplay";
import Image from "next/image";

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
    <div className="flex flex-grow flex-col items-center p-4 space-y-4 max-w-full overflow-x-hidden">
      <SearchInput
        onSearch={(search: string) => {
          setHasError(false);
          setSearchTerm(search);
        }}
      />
      { searchTerm ? <QueryDisplay /> : <Image src="/shakespeare.webp" alt="shakespeare" width={400} height={400} className="sm:w-[400px] sm:h-[200px] w-[200px] h-[100px]" /> }
    </div>
  );
}