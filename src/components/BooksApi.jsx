/* 
this component tests the use of APIs
and the correct state update
*/

import { useState, useEffect, useMemo, useCallback } from 'react';
import { getBooks } from '../services/gutendex';
import _debounce from 'lodash/debounce';

export function BooksApi() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(2);

  useEffect(() => {
    async function fetchBooks() {
      const results = await getBooks();
      setBooks(results);
    }
    fetchBooks();
  }, []); // do not forget the dependecy empty so you avoid a infinite loop

  // to the event online
  useEffect(() => {
    const handleOnline = () => {
      getBooks().then((books) => setBooks(books));
    };
    handleOnline();
    window.addEventListener('online', handleOnline);
    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, []);

  const booksFiltered = useMemo(() => {
    return books.filter((b) => b.title.toLowerCase().includes(search));
  }, [books, search]);

  const searchNewPage = () => {
    setPage((page) => {
      return page + 1;
    });
    console.log('🚀 ~ file: BooksApi.jsx:44 ~ searchNewPage ~ page:', page);
    getBooks(page).then((books) => setBooks((prev) => [...prev, ...books]));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const debounceChange = useCallback(_debounce(handleChange, 300), []);
  return (
    <section>
      <h1>Testing some fetch api and be aware of some errors</h1>
      <div>
        <input placeholder="Nombre de libro..." onChange={debounceChange} />
      </div>
      <div>
        <button onClick={searchNewPage}>Next page {page}</button>
      </div>
      <ul>
        {booksFiltered.map((r) => (
          <li key={r.id}>
            <p>{r.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
