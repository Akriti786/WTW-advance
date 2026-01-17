// import React from "react";
// import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { Text, IconButton } from "react-native-paper";

// export default function MovieCard({ movie, onFavPress, isFav, cardWidth }) {
//   return (
//     <View style={[styles.card, { width: cardWidth }]}>
//       <Image
//         source={{
//           uri: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//             : "https://via.placeholder.com/150x225.png?text=No+Image",
//         }}
//         style={styles.image}
//       />
//       <View style={styles.info}>
//         <Text numberOfLines={2} style={styles.title}>
//           {movie.title}
//         </Text>
//         <TouchableOpacity onPress={() => onFavPress(movie)}>
//           <IconButton
//             icon={isFav ? "heart" : "heart-outline"}
//             iconColor={isFav ? "red" : "gray"}
//             size={22}
//           />
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.subInfo}>
//         {movie.release_date ? movie.release_date : "Unknown"} | {movie.original_language?.toUpperCase()}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 15,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     overflow: "hidden",
//     elevation: 3,
//     padding: 5,
//   },
//   image: {
//     height: 225,
//     borderRadius: 10,
//     resizeMode: "cover",
//   },
//   info: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 5,
//   },
//   title: {
//     fontWeight: "bold",
//     flex: 1,
//     fontSize: 14,
//   },
//   subInfo: {
//     fontSize: 12,
//     color: "gray",
//     marginTop: 2,
//   },
// });




// import React, { useContext } from "react";
// import { View, Image, StyleSheet } from "react-native";
// import { Text, IconButton } from "react-native-paper";
// import { MovieStatusContext } from "../context/MovieStatusContext";

// export default function MovieCard({
//   movie,
//   isFav,
//   onFavPress,
//   cardWidth,
// }) {
//   const { watchlist, watched, toggleWatchlist, toggleWatched } =
//     useContext(MovieStatusContext);

//   const isWatchlist = watchlist.some((m) => m.id === movie.id);
//   const isWatched = watched.some((m) => m.id === movie.id);

//   return (
//     <View style={[styles.card, { width: cardWidth }]}>
//       {/* Poster */}
//       <Image
//         source={{
//           uri: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//             : "https://via.placeholder.com/300x450.png",
//         }}
//         style={styles.image}
//       />

//       {/* Action buttons */}
//       <View style={styles.actions}>
//         <IconButton
//           icon={isWatched ? "play-circle" : "play-circle-outline"}
//           iconColor={isWatched ? "#4CAF50" : "gray"}
//           size={24}
//           onPress={() => toggleWatched(movie)}
//         />
//         <IconButton
//           icon={isWatchlist ? "star" : "star-outline"}
//           iconColor={isWatchlist ? "#FFC107" : "gray"}
//           size={24}
//           onPress={() => toggleWatchlist(movie)}
//         />
//         <IconButton
//           icon={isFav ? "heart" : "heart-outline"}
//           iconColor={isFav ? "red" : "gray"}
//           size={24}
//           onPress={() => onFavPress(movie)}
//         />
//       </View>

//       {/* Movie title */}
//       <Text numberOfLines={2} style={styles.title}>
//         {movie.title}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 15,
//     borderRadius: 14,
//     overflow: "hidden",
//     backgroundColor: "#fff",
//   },
//   image: {
//     width: "100%",
//     aspectRatio: 2 / 3,
//     resizeMode: "cover",
//     borderTopLeftRadius: 14,
//     borderTopRightRadius: 14,
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 4,
//     backgroundColor: "#f8f8f8",
//   },
//   title: {
//     fontWeight: "bold",
//     padding: 6,
//     fontSize: 14,
//     textAlign: "center",
//   },
// });



// import React, { useContext } from "react";
// import { View, Image, StyleSheet } from "react-native";
// import { Text, IconButton } from "react-native-paper";
// import { MovieStatusContext } from "../context/MovieStatusContext";
// import { ThemeContext } from "../context/ThemeContext";

// export default function MovieCard({
//   movie,
//   isFav,
//   onFavPress,
//   onWatchedPress,
//   onWatchlistPress,
//   cardWidth,
// }) {
//   const { watchlist, watched, toggleWatchlist, toggleWatched } =
//     useContext(MovieStatusContext);
//   const { colors } = useContext(ThemeContext);

//   const isWatchlist = watchlist.some((m) => m.id === movie.id);
//   const isWatched = watched.some((m) => m.id === movie.id);

//   return (
//     <View style={[styles.card, { width: cardWidth, backgroundColor: colors.card }]}>
//       <Image
//         source={{
//           uri: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//             : "https://via.placeholder.com/300x450.png",
//         }}
//         style={styles.image}
//       />

//       <View style={styles.actions}>
//         <IconButton
//           icon={isWatched ? "play-circle" : "play-circle-outline"}
//           iconColor={isWatched ? "#4CAF50" : "gray"}
//           size={24}
//           onPress={onWatchedPress || (() => toggleWatched(movie))}
//         />
//         <IconButton
//           icon={isWatchlist ? "star" : "star-outline"}
//           iconColor={isWatchlist ? "#FFC107" : "gray"}
//           size={24}
//           onPress={onWatchlistPress || (() => toggleWatchlist(movie))}
//         />
//         <IconButton
//           icon={isFav ? "heart" : "heart-outline"}
//           iconColor={isFav ? "red" : "gray"}
//           size={24}
//           onPress={() => onFavPress(movie)}
//         />
//       </View>

//       <Text numberOfLines={2} style={[styles.title, { color: colors.text }]}>
//         {movie.title}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 15,
//     borderRadius: 14,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     aspectRatio: 2 / 3,
//     resizeMode: "cover",
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 4,
//     backgroundColor: "#f8f8f8",
//   },
//   title: {
//     fontWeight: "bold",
//     padding: 6,
//     fontSize: 14,
//     textAlign: "center",
//   },
// });





// import React, { useContext } from "react";
// import { View, Image, StyleSheet } from "react-native";
// import { Text, IconButton } from "react-native-paper";
// import { MovieStatusContext } from "../context/MovieStatusContext";
// import { ThemeContext } from "../context/ThemeContext";

// export default function MovieCard({
//   movie,
//   cardWidth,
// }) {
//   const { watchlist, watched, favorites, toggleWatchlist, toggleWatched, toggleFavorite } =
//     useContext(MovieStatusContext);
//   const { colors } = useContext(ThemeContext);

//   const isWatchlist = watchlist.some((m) => m.id === movie.id);
//   const isWatched = watched.some((m) => m.id === movie.id);
//   const isFav = favorites.some((m) => m.id === movie.id);

//   return (
//     <View style={[styles.card, { width: cardWidth, backgroundColor: colors.card }]}>
//       <Image
//         source={{
//           uri: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//             : "https://via.placeholder.com/300x450.png",
//         }}
//         style={styles.image}
//       />

//       <View style={[styles.actions, { backgroundColor: colors.card }]}>
//         <IconButton
//           icon={isWatched ? "play-circle" : "play-circle-outline"}
//           iconColor={isWatched ? "#4CAF50" : "gray"}
//           size={24}
//           onPress={() => toggleWatched(movie)}
//         />
//         <IconButton
//           icon={isWatchlist ? "star" : "star-outline"}
//           iconColor={isWatchlist ? "#FFC107" : "gray"}
//           size={24}
//           onPress={() => toggleWatchlist(movie)}
//         />
//         <IconButton
//           icon={isFav ? "heart" : "heart-outline"}
//           iconColor={isFav ? "red" : "gray"}
//           size={24}
//           onPress={() => toggleFavorite(movie)}
//         />
//       </View>

//       <Text numberOfLines={2} style={[styles.title, { color: colors.text }]}>
//         {movie.title}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 15,
//     borderRadius: 14,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     aspectRatio: 2 / 3,
//     resizeMode: "cover",
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 4,
//   },
//   title: {
//     fontWeight: "bold",
//     padding: 6,
//     fontSize: 14,
//     textAlign: "center",
//   },
// });



// import React, { useContext } from "react";
// import { View, Image, StyleSheet } from "react-native";
// import { Text, IconButton } from "react-native-paper";
// import { MovieStatusContext } from "../context/MovieStatusContext";
// import { ThemeContext } from "../context/ThemeContext";

// export default function MovieCard({ movie, cardWidth }) {
//   const { watchlist, watched, favorites, toggleWatchlist, toggleWatched, toggleFavorite } =
//     useContext(MovieStatusContext);
//   const { colors } = useContext(ThemeContext);

//   const isWatchlist = watchlist.some((m) => m.id === movie.id);
//   const isWatched = watched.some((m) => m.id === movie.id);
//   const isFav = favorites.some((m) => m.id === movie.id);

//   return (
//     <View style={[styles.card, { width: cardWidth, backgroundColor: colors.card }]}>
//       <Image
//         source={{
//           uri: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//             : "https://via.placeholder.com/300x450.png",
//         }}
//         style={styles.image}
//       />

//       <View style={styles.actions}>
//         <IconButton
//           icon={isWatched ? "play-circle" : "play-circle-outline"}
//           iconColor={isWatched ? "#4CAF50" : "gray"}
//           size={24}
//           onPress={() => toggleWatched(movie)}
//         />
//         <IconButton
//           icon={isWatchlist ? "star" : "star-outline"}
//           iconColor={isWatchlist ? "#FFC107" : "gray"}
//           size={24}
//           onPress={() => toggleWatchlist(movie)}
//         />
//         <IconButton
//           icon={isFav ? "heart" : "heart-outline"}
//           iconColor={isFav ? "red" : "gray"}
//           size={24}
//           onPress={() => toggleFavorite(movie)}
//         />
//       </View>

//       <Text numberOfLines={2} style={[styles.title, { color: colors.text }]}>
//         {movie.title}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 15,
//     borderRadius: 14,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     aspectRatio: 2 / 3,
//     resizeMode: "cover",
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 4,
//     backgroundColor: "#f8f8f8",
//   },
//   title: {
//     fontWeight: "bold",
//     padding: 6,
//     fontSize: 14,
//     textAlign: "center",
//   },
// });



// import React, { useContext } from "react";
// import { View, Image, StyleSheet } from "react-native";
// import { Text, IconButton } from "react-native-paper";
// import { MovieStatusContext } from "../context/MovieStatusContext";

// export default function MovieCard({ movie, cardWidth }) {
//   const { watchlist, watched, favorites, toggleWatchlist, toggleWatched, toggleFavorite } =
//     useContext(MovieStatusContext);

//   const isWatchlist = watchlist.some((m) => m.id === movie.id);
//   const isWatched = watched.some((m) => m.id === movie.id);
//   const isFav = favorites.some((m) => m.id === movie.id);

//   return (
//     <View style={[styles.card, { width: cardWidth, backgroundColor: "#fff" }]}>
//       <Image
//         source={{
//           uri: movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//             : "https://via.placeholder.com/300x450.png",
//         }}
//         style={styles.image}
//       />

//       <View style={styles.actions}>
//         <IconButton
//           icon={isWatched ? "play-circle" : "play-circle-outline"}
//           iconColor={isWatched ? "#4CAF50" : "gray"}
//           size={24}
//           onPress={() => toggleWatched(movie)}
//         />
//         <IconButton
//           icon={isWatchlist ? "star" : "star-outline"}
//           iconColor={isWatchlist ? "#FFC107" : "gray"}
//           size={24}
//           onPress={() => toggleWatchlist(movie)}
//         />
//         <IconButton
//           icon={isFav ? "heart" : "heart-outline"}
//           iconColor={isFav ? "red" : "gray"}
//           size={24}
//           onPress={() => toggleFavorite(movie)}
//         />
//       </View>

//       <Text numberOfLines={2} style={styles.title}>
//         {movie.title}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     marginBottom: 15,
//     borderRadius: 14,
//     overflow: "hidden",
//   },
//   image: {
//     width: "100%",
//     aspectRatio: 2 / 3,
//     resizeMode: "cover",
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 4,
//     backgroundColor: "#f8f8f8",
//   },
//   title: {
//     fontWeight: "bold",
//     padding: 6,
//     fontSize: 14,
//     textAlign: "center",
//   },
// });



// src/components/MovieCard.js
import React, { useContext } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, IconButton } from "react-native-paper";
import { MovieStatusContext } from "../context/MovieStatusContext";
import { ThemeContext } from "../context/ThemeContext";

export default function MovieCard({ movie, cardWidth }) {
  const { watchlist, watched, favorites, toggleWatchlist, toggleWatched, toggleFavorite } = useContext(MovieStatusContext);
  const { colors } = useContext(ThemeContext);

  const isWatchlist = watchlist.some(m => m.id === movie.id);
  const isWatched = watched.some(m => m.id === movie.id);
  const isFav = favorites.some(m => m.id === movie.id);

  return (
    <View style={[styles.card, { width: cardWidth, backgroundColor: colors.card }]}>
      <Image
        source={{ uri: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x450.png" }}
        style={styles.image}
      />

      <View style={styles.actions}>
        <IconButton
          icon={isWatched ? "play-circle" : "play-circle-outline"}
          iconColor={isWatched ? "#4CAF50" : "gray"}
          size={24}
          onPress={() => toggleWatched(movie)}
        />
        <IconButton
          icon={isWatchlist ? "star" : "star-outline"}
          iconColor={isWatchlist ? "#FFC107" : "gray"}
          size={24}
          onPress={() => toggleWatchlist(movie)}
        />
        <IconButton
          icon={isFav ? "heart" : "heart-outline"}
          iconColor={isFav ? "red" : "gray"}
          size={24}
          onPress={() => toggleFavorite(movie)}
        />
      </View>

      <Text numberOfLines={2} style={[styles.title, { color: colors.text }]}>{movie.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { marginBottom: 15, borderRadius: 14, overflow: "hidden" },
  image: { width: "100%", aspectRatio: 2 / 3, resizeMode: "cover" },
  actions: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 4, backgroundColor: "#f8f8f8" },
  title: { fontWeight: "bold", padding: 6, fontSize: 14, textAlign: "center" },
});
