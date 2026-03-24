import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

const WatchListContextProvider = ({ children }) => {

  // ✅ Initialize from localStorage properly
  const [watchList, setWatchList] = useState(() => {
    const data = localStorage.getItem('watchList');
    return data ? JSON.parse(data) : [];
  });

  // ✅ Sync with localStorage
  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  // ✅ Add movie properly
  const addToWatchList = (movie) => {
    setWatchList((prev) => {
      // prevent duplicates
      if (prev.find(item => item.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  return (
    <WatchListContext.Provider value={{
      watchList,
      addToWatchList
    }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;