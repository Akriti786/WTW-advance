// import React, { useContext } from "react";
// import { View, FlatList, StyleSheet, Dimensions } from "react-native";
// import { Text } from "react-native-paper";
// import MovieCard from "../components/MovieCard";
// import { FavoritesContext } from "../context/FavoritesContext";
// import { ThemeContext } from "../context/ThemeContext";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 45) / 2;

// export default function FavoritesScreen() {
//   const { favorites, toggleFavorite } = useContext(FavoritesContext);
//   const { colors } = useContext(ThemeContext);   // ← THEME COLORS NOW AVAILABLE

//   return (
//     <View style={[styles.container, { backgroundColor: colors.background }]}>
      
//       {/* Header */}
//       <Text 
//         variant="headlineLarge"
//         style={[styles.header, { color: colors.text }]}
//       >
//         💖 My Favorites
//       </Text>

//       {/* Empty State */}
//       {favorites.length === 0 ? (
//         <Text style={[styles.emptyText, { color: colors.text }]}>
//           No favorites yet!
//         </Text>
//       ) : (
//         <FlatList
//           data={favorites}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           columnWrapperStyle={{ justifyContent: "space-between" }}
//           renderItem={({ item }) => (
//             <MovieCard
//               movie={item}
//               isFav={true}
//               onFavPress={toggleFavorite}
//               cardWidth={CARD_WIDTH}
//             />
//           )}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     padding: 15,
//   },
//   header: { 
//     textAlign: "center",
//     marginBottom: 10,
//     fontWeight: "bold",
//   },
//   emptyText: {
//     marginTop: 20,
//     textAlign: "center",
//     fontSize: 16,
//   },
// });











// import React, { useContext } from "react";
// import { View, FlatList, StyleSheet, Dimensions, Share } from "react-native";
// import { Text, Button } from "react-native-paper";
// import MovieCard from "../components/MovieCard";
// import { FavoritesContext } from "../context/FavoritesContext";
// import { ThemeContext } from "../context/ThemeContext";
// import { SafeAreaView } from "react-native-safe-area-context";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 45) / 2;

// export default function FavoritesScreen() {
//   const { favorites, toggleFavorite } = useContext(FavoritesContext);
//   const { colors } = useContext(ThemeContext);

//   // 🔹 Share favorites function
//   const shareFavorites = async () => {
//     if (favorites.length === 0) {
//       alert("No favorites to share!");
//       return;
//     }

//     const movieList = favorites.map((m) => `• ${m.title}`).join("\n");

//     try {
//       await Share.share({
//         message: `My Favorite Movies:\n\n${movieList}`,
//       });
//     } catch (error) {
//       console.log("Share error:", error.message);
//     }
//   };

//    return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: colors.background }}
//       edges={["top"]}
//     >
//       {/* Header */}
//       <Text
//         variant="headlineLarge"
//         style={[styles.header, { color: colors.text }]}
//       >
//         💖 My Favorites
//       </Text>

//       {favorites.length === 0 ? (
//         <Text style={[styles.emptyText, { color: colors.text }]}>
//           No favorites yet!
//         </Text>
//       ) : (
//         <FlatList
//           data={favorites}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}

//           contentContainerStyle={{
//             paddingHorizontal: 10,
//             paddingBottom: 90, // 👈 tab bar space
//           }}

//           columnWrapperStyle={{
//             justifyContent: "space-between",
//           }}

//           renderItem={({ item }) => (
//             <MovieCard
//               movie={item}
//               isFav
//               onFavPress={toggleFavorite}
//               cardWidth={CARD_WIDTH}
//             />
//           )}
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   header: {
//     textAlign: "center",
//     marginBottom: 10,
//     fontWeight: "bold",
//   },
//   emptyText: {
//     marginTop: 20,
//     textAlign: "center",
//     fontSize: 16,
//   },
// });




// import React, { useContext } from "react";
// import { FlatList, StyleSheet, Dimensions, Share } from "react-native";
// import { Text, Button } from "react-native-paper";
// import MovieCard from "../components/MovieCard";
// import { FavoritesContext } from "../context/FavoritesContext";
// import { ThemeContext } from "../context/ThemeContext";
// import { SafeAreaView } from "react-native-safe-area-context";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 30) / 2; // ✅ SAME AS HOME

// export default function FavoritesScreen() {
//   const { favorites, toggleFavorite } = useContext(FavoritesContext);
//   const { colors } = useContext(ThemeContext);

//   // 🔹 Share favorites
//   const shareFavorites = async () => {
//     if (favorites.length === 0) return;

//     const movieList = favorites.map((m) => `• ${m.title}`).join("\n");

//     try {
//       await Share.share({
//         message: `🎬 My Favorite Movies:\n\n${movieList}`,
//       });
//     } catch (error) {
//       console.log("Share error:", error.message);
//     }
//   };

//   return (
//     <SafeAreaView
//       style={{ flex: 1, backgroundColor: colors.background }}
//       edges={["top"]}
//     >
//       {/* Header */}
//       <Text
//         variant="headlineLarge"
//         style={[styles.header, { color: colors.text }]}
//       >
//         💖 My Favorites
//       </Text>

//       {/* Share Button */}
//       {favorites.length > 0 && (
//         <Button
//           mode="contained"
//           onPress={shareFavorites}
//           style={styles.shareButton}
//           buttonColor={colors.primary}
//           textColor={colors.onPrimary}
//         >
//           Share Favorites
//         </Button>
//       )}

//       {favorites.length === 0 ? (
//         <Text style={[styles.emptyText, { color: colors.text }]}>
//           No favorites yet!
//         </Text>
//       ) : (
//         <FlatList
//           data={favorites}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}

//           contentContainerStyle={{
//             paddingHorizontal: 10,
//             paddingBottom: 90, // ✅ tab bar space
//           }}

//           columnWrapperStyle={{
//             justifyContent: "space-between",
//           }}

//           renderItem={({ item }) => (
//             <MovieCard
//               movie={item}
//               isFav
//               onFavPress={toggleFavorite}
//               cardWidth={CARD_WIDTH}
//             />
//           )}
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     textAlign: "center",
//     marginBottom: 8,
//     fontWeight: "bold",
//   },
//   shareButton: {
//     marginHorizontal: 16,
//     marginBottom: 10,
//     borderRadius: 8,
//   },
//   emptyText: {
//     marginTop: 20,
//     textAlign: "center",
//     fontSize: 16,
//   },
// });


// import React, { useContext } from "react";
// import { FlatList, Dimensions, StyleSheet, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import MovieCard from "../components/MovieCard";
// import { FavoritesContext } from "../context/FavoritesContext";
// import { ThemeContext } from "../context/ThemeContext";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 30) / 2;

// export default function FavoritesScreen() {
//   const { favorites, toggleFavorite } = useContext(FavoritesContext);
//   const { colors } = useContext(ThemeContext);

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
//       <Text style={[styles.header, { color: colors.text }]}>❤️ Favorites</Text>

//       {favorites.length === 0 ? (
//         <Text style={[styles.emptyText, { color: colors.text }]}>
//           No favorites yet!
//         </Text>
//       ) : (
//         <FlatList
//           data={favorites}
//           numColumns={2}
//           keyExtractor={(i) => i.id.toString()}
//           contentContainerStyle={{ padding: 10, paddingBottom: 90 }}
//           columnWrapperStyle={{ justifyContent: "space-between" }}
//           renderItem={({ item }) => (
//             <MovieCard
//               movie={item}
//               isFav
//               onFavPress={toggleFavorite}
//               cardWidth={CARD_WIDTH}
//             />
//           )}
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   emptyText: {
//     textAlign: "center",
//     marginTop: 20,
//     fontSize: 16,
//   },
// });



import React, { useContext } from "react";
import { FlatList, Dimensions, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../components/MovieCard";
import { MovieStatusContext } from "../context/MovieStatusContext";
import { ThemeContext } from "../context/ThemeContext";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 30) / 2;

export default function FavoritesScreen() {
const { watchlist, watched, favorites } = useContext(MovieStatusContext);
  const { colors } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
      {/* Header */}
      <Text style={[styles.header, { color: colors.text }]}>❤️ Favorites</Text>

      {/* Empty state */}
      {favorites.length === 0 ? (
        <Text style={[styles.emptyText, { color: colors.text }]}>
          No favorites yet!
        </Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 90 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              cardWidth={CARD_WIDTH}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});
