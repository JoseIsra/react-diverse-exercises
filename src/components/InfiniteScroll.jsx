import { useState, useRef, useEffect, useCallback } from 'react';
import './InfiniteScroll.css';

export function InfiniteScroll() {
  // const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const scrollArea = useRef(null);
  const sentinel = useRef(null);
  const page = useRef(0);

  useEffect(() => {
    fetchContent()
      .then((data) => {
        console.log('data', data);
        setItems((prev) => [...prev, data]);
        // setPage((prevPage) => prevPage + 1);
        page.current += 1;
      })
      .catch((error) => {
        console.error(error);
      });
    initObservable();
  }, []);

  const fetchContent = (thepage = 0) => {
    const _items = [];
    console.log('the page', thepage);
    // load content every 10 items for page
    // load 10 firs items
    return new Promise((resolve, reject) => {
      if (thepage > 10) reject('No more content');
      for (let index = thepage * 10; index < thepage * 10 + 10; index += 1) {
        // 0 1 2 3 4 5 6 7 8 9
        _items.push(index);
      }
      setTimeout(() => {
        resolve(_items);
      }, 1000);
    });
  };

  const coolObserverCallback = useCallback((entries) => {
    console.log('SENTINEL ON VIEWPORT? 🤔');
    console.log('las entries', entries);
    if (entries[0].isIntersecting) {
      // call to fecth
      fetchContent(page.current)
        .then((data) => {
          console.log('data', data);
          // setPage((prevPage) => prevPage + 1);
          page.current += 1;
          setItems((prev) => [...prev, ...data]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const initObservable = () => {
    const options = {
      root: scrollArea.current,
      rootMargin: '10px',
    };
    const observer = new IntersectionObserver(coolObserverCallback, options);
    observer.observe(sentinel.current);
  };

  return (
    <main className="wrapper">
      <div className="scroll-box" ref={scrollArea}>
        {/* los items por aquí */}
        {items.map((item, idx) => (
          <div key={idx} className="scroll-item">
            Elemento {idx}
          </div>
        ))}
        {/* la bandera */}
        <div className="scroll-sentinel" ref={sentinel}></div>
      </div>
    </main>
  );
}
