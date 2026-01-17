// import React, { useContext } from "react";
// import { FlatList, StyleSheet, Dimensions, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import MovieCard from "../components/MovieCard";
// import { MovieStatusContext } from "../context/MovieStatusContext";
// import { ThemeContext } from "../context/ThemeContext";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 30) / 2;

// export default function WatchedScreen() {
//   const { watched } = useContext(MovieStatusContext);
//   const { colors } = useContext(ThemeContext);

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
//       {watched.length === 0 ? (
//         <Text style={[styles.emptyText, { color: colors.text }]}>
//           You haven't watched any movies yet!
//         </Text>
//       ) : (
//         <FlatList
//           data={watched}
//           keyExtractor={(item) => item.id.toString()}
//           numColumns={2}
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 90 }}
//           columnWrapperStyle={{ justifyContent: "space-between" }}
//           renderItem={({ item }) => (
//             <MovieCard movie={item} cardWidth={CARD_WIDTH} />
//           )}
//         />
//       )}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   emptyText: {
//     textAlign: "center",
//     marginTop: 20,
//     fontSize: 16,
//   },
// });




import React, { useContext } from "react";
import { FlatList, StyleSheet, Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../components/MovieCard";
import { MovieStatusContext } from "../context/MovieStatusContext";
import { ThemeContext } from "../context/ThemeContext";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 30) / 2;

export default function WatchedScreen() {
const { watchlist, watched, favorites } = useContext(MovieStatusContext);
  const { colors } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
      {/* Heading */}
      <Text style={[styles.header, { color: colors.text }]}>🎬 Watched Movies</Text>

      {watched.length === 0 ? (
        <Text style={[styles.emptyText, { color: colors.text }]}>
          You haven't watched any movies yet!
        </Text>
      ) : (
        <FlatList
          data={watched}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 90 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <MovieCard movie={item} cardWidth={CARD_WIDTH} />
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

