import { useDictionary } from "@/context/DictionaryContext";


export default function QueryDisplay() {
  const { queryData, hasError } = useDictionary();

  const { word, phonetic, phonetics, meanings, sourceUrls, license } = queryData || {
    word: "",
    phonetic: "",
    phonetics: [],
    meanings: [],
    sourceUrls: [],
    license: { name: "", url: "" },
  };

  function getRegionFromUrl(url: string) {
    const match = url.match(/-(uk|us|au)\.mp3$/);
    return match ? match[1].toUpperCase() : null;
  }  

  const playAudio = (audioUrl: string) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full text-center px-4 space-y-4">
        <h1 className="text-lg sm:text-xl font-bold">
          We couldn&apos;t find any matches for your search.
        </h1>
        <p className="text-sm sm:text-base">
          Please double-check your spelling or try searching for a different word.
        </p>
      </div>
    );
  }  

  return (
    <div className="flex flex-col space-y-6 max-w-2xl px-4 pb-14">
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div>
          <h1 className="text-[52px] font-bold leading-[56px]">{word}</h1>
          <p className="text-purple-500 text-lg italic">{phonetic}</p>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          {phonetics.map((phonetic, index) =>
            phonetic.audio ? (
              <div className="flex items-center gap-2" key={index}>
              <button
                key={index}
                onClick={() => playAudio(phonetic.audio)}
                className="p-2 rounded-full bg-purple-400 hover:bg-purple-400 focus:ring-2 focus:ring-purple-600 transition"
                aria-label={`Play audio ${index + 1}`}
              >
                <svg
                  viewBox="0 0 32 32"
                  width="24"
                  height="24"
                  stroke="#c084fc"
                  fill="#fff"
                >
                  <path d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.5-0.9l20 11a1 1 0 0 1 0 1.8l-20 11A1 1 0 0 1 7 28Z" />
                </svg>
              </button>
              <p className="text-purple-500 text-sm italic">{getRegionFromUrl(phonetic.audio)}</p>
              </div>
            ) : null
          )}
        </div>
      </header>

      <section>
        {meanings.map((meaning, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold">{meaning.partOfSpeech}</h2>
            <h3 className="text-purple-300 mt-2">Meaning</h3>
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
