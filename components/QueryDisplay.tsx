import React from "react";

export default function QueryDisplay({
  word,
  phonetic,
  phonetics,
  meanings,
  sourceUrls,
  license,
}: {
  word: string;
  phonetic: string;
  phonetics: { text: string; audio: string }[];
  meanings: {
    partOfSpeech: string;
    definitions: { definition: string; example: string }[];
  }[];
  sourceUrls: string[];
  license: { name: string; url: string };
}) {
  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  return (
    <div className="flex flex-col items-start space-y-4 w-full max-w-2xl">
      <div className="flex items-center gap-2 justify-between w-full">
        <div>
          <h1 className="text-2xl font-bold">{word}</h1>
          <p className="text-purple-300">{phonetic}</p>
        </div>
        {phonetics.map((phonetic, index) => (
          <div key={index}>
            {phonetic.audio && (
              <button
                onClick={() => playAudio(phonetic.audio)}
                className="p-5 rounded-full bg-purple-300 opacity-90 hover:bg-purple-100 focus:ring-purple-400"
                aria-label="Play sound"
              >
                <svg
                  viewBox="0 0 32 32"
                  width="32"
                  height="32"
                  stroke="purple"
                  fill="purple"
                >
                  <path d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.5-0.9l20 11a1 1 0 0 1 0 1.8l-20 11A1 1 0 0 1 7 28Z" />
                </svg>
              </button>
            )}
          </div>
        ))}
      </div>
      {meanings.map((meaning, index) => (
        <div key={index} className="mt-4">
          <h2 className="text-xl font-semibold">{meaning.partOfSpeech}</h2>
          <h3 className="text-md text-neutral-600 opacitiy-80 font-medium py-2">Meaning</h3>
          <ul className="list-disc pl-6">
            {meaning.definitions.map((definition, idx) => (
              <li key={idx}>
                <p>{definition.definition}</p>
                {definition.example && (
                  <p className="italic">{definition.example}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Source:</h3>
        <ul className="list-disc pl-6">
          {sourceUrls.map((url, idx) => (
            <li key={idx}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {license.name && license.url && (
        <p className="text-sm mt-2">
          License:{" "}
          <a
            href={license.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            {license.name}
          </a>
        </p>
      )}
    </div>
  );
}
