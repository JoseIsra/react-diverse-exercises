import { useContext, useState } from 'react';
import { createContext } from 'react';

export const ShareContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShareProvider = ({ children }) => {
  const [share, setShare] = useState('');
  return (
    <ShareContext.Provider value={{ share, setShare }}>
      {children}
    </ShareContext.Provider>
  );
};

export const useShareContext = () => useContext(ShareContext);
