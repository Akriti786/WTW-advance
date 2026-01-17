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
