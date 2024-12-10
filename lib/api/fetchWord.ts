export async function fetchWordData(query: string) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching word data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
