import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext();

const WatchListContextProvider = ({ children }) => {

  const [watchList, setWatchList] = useState(() => {
  const stored = localStorage.getItem('watchList');
  return stored ? JSON.parse(stored) : [];
})
  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

 const sortLow=()=>{
  setWatchList((prev)=>[...prev].sort((a,b)=>a.vote_average-b.vote_average))
 }
 const sortHigh=()=>{
  console.log('inside the context high');
  
  setWatchList((prev)=>[...prev].sort((a,b)=>b.vote_average-a.vote_average))
 }

  const removeFromWatchList = (id) => {
  setWatchList((prev) => prev.filter(item => item.id !== id)) 
}
  const addToWatchList = (movie) => {
    console.log('inside the  context',movie);
    
    setWatchList((prev) => [...prev,movie]);
  };

  return (
    <WatchListContext.Provider value={{
      watchList,
      addToWatchList,
      removeFromWatchList,
      sortLow,
      sortHigh
    }}>
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchListContextProvider;