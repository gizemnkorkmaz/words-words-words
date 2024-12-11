"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface WordData {
  word: string;
  definition: string;
  phonetic: string;
  phonetics: { text: string; audio: string }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
    }[];
  }[];
  sourceUrls: string[];
  license: { name: string; url: string };
}

interface DictionaryContextType {
  query: string;
  setQuery: (query: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  queryData: WordData | null;
  setQueryData: (data: WordData | null) => void;
  hasError: boolean;
  setHasError: (error: boolean) => void;
  clearSearch: () => void;
}

const DictionaryContext = createContext<DictionaryContextType | undefined>(
  undefined
);

export const DictionaryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [queryData, setQueryData] = useState<WordData | null>(null);
  const [hasError, setHasError] = useState(false);

  const clearSearch = () => {
    setQuery("");
    setSearchTerm("");
    setQueryData(null);
    setHasError(false);
  };

  return (
    <DictionaryContext.Provider
      value={{
        query,
        setQuery,
        searchTerm,
        setSearchTerm,
        queryData,
        setQueryData,
        hasError,
        setHasError,
        clearSearch,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useDictionary must be used within a DictionaryProvider");
  }
  return context;
};
