import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MovieStatusContext = createContext();

export const MovieStatusProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [watched, setWatched] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Load saved data on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const [wList, wtd, fav] = await Promise.all([
          AsyncStorage.getItem("watchlist"),
          AsyncStorage.getItem("watched"),
          AsyncStorage.getItem("favorites"),
        ]);
        if (wList) setWatchlist(JSON.parse(wList));
        if (wtd) setWatched(JSON.parse(wtd));
        if (fav) setFavorites(JSON.parse(fav));
      } catch (err) {
        console.log("Error loading movie status:", err);
      }
    };
    loadData();
  }, []);

  // Save to AsyncStorage whenever lists change
  useEffect(() => { AsyncStorage.setItem("watchlist", JSON.stringify(watchlist)); }, [watchlist]);
  useEffect(() => { AsyncStorage.setItem("watched", JSON.stringify(watched)); }, [watched]);
  useEffect(() => { AsyncStorage.setItem("favorites", JSON.stringify(favorites)); }, [favorites]);

  // Toggle functions
  const toggleWatchlist = (movie) => {
    setWatchlist(prev => prev.some(m => m.id === movie.id) ? prev.filter(m => m.id !== movie.id) : [...prev, movie]);
  };
  const toggleWatched = (movie) => {
    setWatched(prev => prev.some(m => m.id === movie.id) ? prev.filter(m => m.id !== movie.id) : [...prev, movie]);
  };
  const toggleFavorite = (movie) => {
    setFavorites(prev => prev.some(m => m.id === movie.id) ? prev.filter(m => m.id !== movie.id) : [...prev, movie]);
  };

  return (
    <MovieStatusContext.Provider value={{
      watchlist,
      watched,
      favorites,
      toggleWatchlist,
      toggleWatched,
      toggleFavorite,
    }}>
      {children}
    </MovieStatusContext.Provider>
  );
};
