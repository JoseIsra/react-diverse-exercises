import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';

import { ShareProvider } from './context/ShareProvider';
// import { SquareGame } from './components/SquareGame';
// import { TestRefThing } from './components/TestRefThing';
import { InfiniteScroll } from './components/InfiniteScroll';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ShareProvider>
    <InfiniteScroll />
  </ShareProvider>
);
