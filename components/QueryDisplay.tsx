import React from "react";

interface QueryDisplayProps {
  word: string;
  phonetic: string;
  phonetics: { text: string; audio: string }[];
  meanings: {
    partOfSpeech: string;
    definitions: { definition: string; example: string }[];
  }[];
  sourceUrls: string[];
  license: { name: string; url: string };
  hasError: boolean;
}

export default function QueryDisplay({
  word,
  phonetic,
  phonetics,
  meanings,
  sourceUrls,
  license,
  hasError,
}: QueryDisplayProps) {
  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-800 text-[14px]">
          We couldn&apos;t find any matches for your search.
        </h1>
        <p className="text-gray-600 text-[12px]">
          Please double-check your spelling or try searching for a different word.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-6 w-full max-w-2xl px-4 sm:px-0">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{word}</h1>
          <p className="text-purple-500 text-lg">{phonetic}</p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          {phonetics.map((phonetic, index) =>
            phonetic.audio ? (
              <button
                key={index}
                onClick={() => playAudio(phonetic.audio)}
                className="p-2 rounded-full bg-purple-300 hover:bg-purple-400 focus:ring-2 focus:ring-purple-600 transition"
                aria-label={`Play audio ${index + 1}`}
              >
                <svg
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.5-0.9l20 11a1 1 0 0 1 0 1.8l-20 11A1 1 0 0 1 7 28Z" />
                </svg>
              </button>
            ) : null
          )}
        </div>
      </header>

      <section>
        {meanings.map((meaning, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold">{meaning.partOfSpeech}</h2>
            <h3 className="text-md text-gray-500 mt-2">Meaning</h3>
            <ul className="list-disc pl-6 space-y-2">
              {meaning.definitions.map((definition, idx) => (
                <li key={idx}>
                  <p>{definition.definition}</p>
                  {definition.example && (
                    <p className="italic mt-1">Example: {definition.example}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {sourceUrls.length > 0 && (
        <section className="text-sm">
          <h3 className="text-lg font-semibold">Source:</h3>
          <ul className="list-disc pl-6 mt-2">
            {sourceUrls.map((url, idx) => (
              <li key={idx}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {license.name && license.url && (
        <p className="text-sm text-gray-500 mt-4">
          License:{" "}
          <a
            href={license.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {license.name}
          </a>
        </p>
      )}
    </div>
  );
}
