// import React, { createContext, useState } from "react";
// import { Share } from "react-native";

// export const MovieStatusContext = createContext();

// export function MovieStatusProvider({ children }) {
//   const [watchlist, setWatchlist] = useState([]);
//   const [watched, setWatched] = useState([]);

//   const shareWhatsApp = async (movie, type) => {
//     const message =
//       type === "watched"
//         ? `🎬 I just watched:\n${movie.title}`
//         : `⭐ Added to my Watchlist:\n${movie.title}`;

//     try {
//       await Share.share({ message });
//     } catch (e) {
//       console.log("Share error", e);
//     }
//   };

//   const toggleWatchlist = (movie) => {
//     setWatchlist((prev) => {
//       const exists = prev.some((m) => m.id === movie.id);
//       if (!exists) shareWhatsApp(movie, "watchlist");
//       return exists ? prev.filter((m) => m.id !== movie.id) : [...prev, movie];
//     });
//   };

//   const toggleWatched = (movie) => {
//     setWatched((prev) => {
//       const exists = prev.some((m) => m.id === movie.id);
//       if (!exists) shareWhatsApp(movie, "watched");
//       return exists ? prev.filter((m) => m.id !== movie.id) : [...prev, movie];
//     });

//     // auto remove from watchlist
//     setWatchlist((prev) => prev.filter((m) => m.id !== movie.id));
//   };

//   return (
//     <MovieStatusContext.Provider
//       value={{ watchlist, watched, toggleWatchlist, toggleWatched }}
//     >
//       {children}
//     </MovieStatusContext.Provider>
//   );
// }


// // src/context/MovieStatusContext.js
// import React, { createContext, useState } from "react";

// export const MovieStatusContext = createContext();

// export function MovieStatusProvider({ children }) {
//   const [watched, setWatched] = useState([]);
//   const [watchlist, setWatchlist] = useState([]);

//   const toggleWatched = (movie) => {
//     if (watched.find((m) => m.id === movie.id)) {
//       setWatched(watched.filter((m) => m.id !== movie.id));
//     } else {
//       setWatched([...watched, movie]);
//     }
//   };

//   const toggleWatchlist = (movie) => {
//     if (watchlist.find((m) => m.id === movie.id)) {
//       setWatchlist(watchlist.filter((m) => m.id !== movie.id));
//     } else {
//       setWatchlist([...watchlist, movie]);
//     }
//   };

//   return (
//     <MovieStatusContext.Provider
//       value={{ watched, watchlist, toggleWatched, toggleWatchlist }}
//     >
//       {children}
//     </MovieStatusContext.Provider>
//   );
// }













// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const MovieStatusContext = createContext();

// export const MovieStatusProvider = ({ children }) => {
//   const [watched, setWatched] = useState([]);
//   const [watchlist, setWatchlist] = useState([]);

//   // Keys for AsyncStorage
//   const WATCHED_KEY = "@watched_movies";
//   const WATCHLIST_KEY = "@watchlist_movies";

//   // Load stored data on mount
//   useEffect(() => {
//     async function loadData() {
//       try {
//         const storedWatched = await AsyncStorage.getItem(WATCHED_KEY);
//         const storedWatchlist = await AsyncStorage.getItem(WATCHLIST_KEY);

//         if (storedWatched) setWatched(JSON.parse(storedWatched));
//         if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));
//       } catch (err) {
//         console.log("Error loading movie status:", err);
//       }
//     }
//     loadData();
//   }, []);

//   // Save to AsyncStorage whenever watched changes
//   useEffect(() => {
//     AsyncStorage.setItem(WATCHED_KEY, JSON.stringify(watched));
//   }, [watched]);

//   // Save to AsyncStorage whenever watchlist changes
//   useEffect(() => {
//     AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
//   }, [watchlist]);

//   // Toggle watched
//   const toggleWatched = (movie) => {
//     setWatched((prev) => {
//       if (prev.some((m) => m.id === movie.id)) {
//         return prev.filter((m) => m.id !== movie.id);
//       } else {
//         return [...prev, movie];
//       }
//     });
//   };

//   // Toggle watchlist
//   const toggleWatchlist = (movie) => {
//     setWatchlist((prev) => {
//       if (prev.some((m) => m.id === movie.id)) {
//         return prev.filter((m) => m.id !== movie.id);
//       } else {
//         return [...prev, movie];
//       }
//     });
//   };

//   return (
//     <MovieStatusContext.Provider
//       value={{ watched, watchlist, toggleWatched, toggleWatchlist }}
//     >
//       {children}
//     </MovieStatusContext.Provider>
//   );
// };




// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const MovieStatusContext = createContext();

// export const MovieStatusProvider = ({ children }) => {
//   const [watched, setWatched] = useState([]);
//   const [watchlist, setWatchlist] = useState([]);

//   const WATCHED_KEY = "@watched_movies";
//   const WATCHLIST_KEY = "@watchlist_movies";

//   // Load persisted data
//   useEffect(() => {
//     async function loadData() {
//       try {
//         const storedWatched = await AsyncStorage.getItem(WATCHED_KEY);
//         const storedWatchlist = await AsyncStorage.getItem(WATCHLIST_KEY);

//         if (storedWatched) setWatched(JSON.parse(storedWatched));
//         if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));
//       } catch (err) {
//         console.log("Error loading watched/watchlist:", err);
//       }
//     }
//     loadData();
//   }, []);

//   // Save whenever watched changes
//   useEffect(() => {
//     AsyncStorage.setItem(WATCHED_KEY, JSON.stringify(watched));
//   }, [watched]);

//   // Save whenever watchlist changes
//   useEffect(() => {
//     AsyncStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
//   }, [watchlist]);

//   const toggleWatched = (movie) => {
//     setWatched((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   const toggleWatchlist = (movie) => {
//     setWatchlist((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   return (
//     <MovieStatusContext.Provider
//       value={{ watched, watchlist, toggleWatched, toggleWatchlist }}
//     >
//       {children}
//     </MovieStatusContext.Provider>
//   );
// };



// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const MovieStatusContext = createContext();

// export const MovieStatusProvider = ({ children }) => {
//   const [watchlist, setWatchlist] = useState([]);
//   const [watched, setWatched] = useState([]);

//   // Load from AsyncStorage on mount
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const storedWatchlist = await AsyncStorage.getItem("watchlist");
//         const storedWatched = await AsyncStorage.getItem("watched");

//         if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));
//         if (storedWatched) setWatched(JSON.parse(storedWatched));
//       } catch (err) {
//         console.log("Error loading movie status:", err);
//       }
//     };
//     loadData();
//   }, []);

//   // Save watchlist
//   useEffect(() => {
//     AsyncStorage.setItem("watchlist", JSON.stringify(watchlist));
//   }, [watchlist]);

//   // Save watched
//   useEffect(() => {
//     AsyncStorage.setItem("watched", JSON.stringify(watched));
//   }, [watched]);

//   const toggleWatchlist = (movie) => {
//     setWatchlist((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   const toggleWatched = (movie) => {
//     setWatched((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   return (
//     <MovieStatusContext.Provider
//       value={{ watchlist, watched, toggleWatchlist, toggleWatched }}
//     >
//       {children}
//     </MovieStatusContext.Provider>
//   );
// };




// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const MovieStatusContext = createContext();

// export const MovieStatusProvider = ({ children }) => {
//   const [watchlist, setWatchlist] = useState([]);
//   const [watched, setWatched] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   // Load all from AsyncStorage
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const storedWatchlist = await AsyncStorage.getItem("watchlist");
//         const storedWatched = await AsyncStorage.getItem("watched");
//         const storedFav = await AsyncStorage.getItem("favorites");

//         if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));
//         if (storedWatched) setWatched(JSON.parse(storedWatched));
//         if (storedFav) setFavorites(JSON.parse(storedFav));
//       } catch (err) {
//         console.log("Error loading movie status:", err);
//       }
//     };
//     loadData();
//   }, []);

//   // Save watchlist
//   useEffect(() => {
//     AsyncStorage.setItem("watchlist", JSON.stringify(watchlist));
//   }, [watchlist]);

//   // Save watched
//   useEffect(() => {
//     AsyncStorage.setItem("watched", JSON.stringify(watched));
//   }, [watched]);

//   // Save favorites
//   useEffect(() => {
//     AsyncStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   const toggleWatchlist = (movie) => {
//     setWatchlist((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   const toggleWatched = (movie) => {
//     setWatched((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   const toggleFavorite = (movie) => {
//     setFavorites((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   return (
//     <MovieStatusContext.Provider
//       value={{
//         watchlist,
//         watched,
//         favorites,
//         toggleWatchlist,
//         toggleWatched,
//         toggleFavorite,
//       }}
//     >
//       {children}
//     </MovieStatusContext.Provider>
//   );
// };



// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const MovieStatusContext = createContext();

// export const MovieStatusProvider = ({ children }) => {
//   const [watchlist, setWatchlist] = useState([]);
//   const [watched, setWatched] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   // Load all lists on mount
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const storedWatchlist = await AsyncStorage.getItem("watchlist");
//         const storedWatched = await AsyncStorage.getItem("watched");
//         const storedFavorites = await AsyncStorage.getItem("favorites");

//         if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));
//         if (storedWatched) setWatched(JSON.parse(storedWatched));
//         if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
//       } catch (err) {
//         console.log("Error loading movie status:", err);
//       }
//     };
//     loadData();
//   }, []);

//   // Save whenever lists change
//   useEffect(() => {
//     AsyncStorage.setItem("watchlist", JSON.stringify(watchlist));
//   }, [watchlist]);

//   useEffect(() => {
//     AsyncStorage.setItem("watched", JSON.stringify(watched));
//   }, [watched]);

//   useEffect(() => {
//     AsyncStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   // Toggle functions
//   const toggleWatchlist = (movie) => {
//     setWatchlist((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   const toggleWatched = (movie) => {
//     setWatched((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   const toggleFavorite = (movie) => {
//     setFavorites((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   return (
//     <MovieStatusContext.Provider
//       value={{
//         watchlist,
//         watched,
//         favorites,
//         toggleWatchlist,
//         toggleWatched,
//         toggleFavorite,
//       }}
//     >
//       {children}
//     </MovieStatusContext.Provider>
//   );
// };



// import React, { createContext, useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export const MovieStatusContext = createContext();

// export const MovieStatusProvider = ({ children }) => {
//   const [watchlist, setWatchlist] = useState([]);
//   const [watched, setWatched] = useState([]);
//   const [favorites, setFavorites] = useState([]);

//   // Load lists from storage on mount
//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         const storedWatchlist = await AsyncStorage.getItem("watchlist");
//         const storedWatched = await AsyncStorage.getItem("watched");
//         const storedFavorites = await AsyncStorage.getItem("favorites");

//         if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist));
//         if (storedWatched) setWatched(JSON.parse(storedWatched));
//         if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
//       } catch (err) {
//         console.log("Error loading movie status:", err);
//       }
//     };
//     loadData();
//   }, []);

//   // Save whenever lists change
//   useEffect(() => {
//     AsyncStorage.setItem("watchlist", JSON.stringify(watchlist));
//   }, [watchlist]);

//   useEffect(() => {
//     AsyncStorage.setItem("watched", JSON.stringify(watched));
//   }, [watched]);

//   useEffect(() => {
//     AsyncStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   // Toggle functions
//   const toggleWatchlist = (movie) => {
//     setWatchlist((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   const toggleWatched = (movie) => {
//     setWatched((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   const toggleFavorite = (movie) => {
//     setFavorites((prev) =>
//       prev.some((m) => m.id === movie.id)
//         ? prev.filter((m) => m.id !== movie.id)
//         : [...prev, movie]
//     );
//   };

//   return (
//     <MovieStatusContext.Provider
//       value={{
//         watchlist,
//         watched,
//         favorites,
//         toggleWatchlist,
//         toggleWatched,
//         toggleFavorite,
//       }}
//     >
//       {children}
//     </MovieStatusContext.Provider>
//   );
// };



// src/context/MovieStatusContext.js
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
