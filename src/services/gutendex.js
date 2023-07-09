const API_URL = 'https://gutendex.com/books/?page=';

export const getBooks = async (page = 1) => {
  const response = await fetch(`${API_URL}${page}`);
  const json = await response.json();
  return json.results.slice(0, 10);
};
