// import React, { useEffect, useState, useContext, useCallback } from "react";
// import { View, FlatList, ScrollView, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
// import { Text, ActivityIndicator, IconButton } from "react-native-paper";
// import { MovieStatusContext } from "../context/MovieStatusContext";
// import MovieCard from "../components/MovieCard";
// import { ThemeContext } from "../context/ThemeContext";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { api } from "../api";

// const { width } = Dimensions.get("window");
// const CARD_WIDTH = (width - 30) / 2;

// export default function HomeScreen() {
//   const { watchlist, watched, favorites, toggleWatchlist, toggleWatched, toggleFavorite } = useContext(MovieStatusContext);
//   const { colors } = useContext(ThemeContext);

//   const [movies, setMovies] = useState([]);
//   const [trending, setTrending] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedLang, setSelectedLang] = useState("");
//   const [moviesByLang, setMoviesByLang] = useState({});

//   const languages = [
//     { name: "Hollywood", code: "en" },
//     { name: "Bollywood", code: "hi" },
//     { name: "Tamil", code: "ta" },
//     { name: "Telugu", code: "te" },
//     { name: "Kannada", code: "kn" },
//     { name: "Malayalam", code: "ml" },
//     { name: "Punjabi", code: "pa" },
//     { name: "Marathi", code: "mr" },
//     { name: "Arabic", code: "ar" },
//     { name: "French", code: "fr" },
//     { name: "German", code: "de" },
//     { name: "Japanese", code: "ja" },
//     { name: "Korean", code: "ko" },
//     { name: "Russian", code: "ru" },
//     { name: "Spanish", code: "es" },
//     { name: "Chinese (Simplified)", code: "zh" },
//     { name: "Italian", code: "it" },
//     { name: "Portuguese", code: "pt" },
//     // { name: "Portuguese (Brazil)", code: "pt-BR" },
//     { name: "Dutch", code: "nl" },
//     { name: "Swedish", code: "sv" },
//     { name: "Norwegian", code: "no" },
//     { name: "Danish", code: "da" },
//     { name: "Finnish", code: "fi" },
//     { name: "Polish", code: "pl" },
//     { name: "Czech", code: "cs" },
//     { name: "Hungarian", code: "hu" },
//     { name: "Romanian", code: "ro" },
//     { name: "Greek", code: "el" },
//     { name: "Turkish", code: "tr" },
//     { name: "Ukrainian", code: "uk" },
//     { name: "Bulgarian", code: "bg" },

//     // Asian
//     { name: "Thai", code: "th" },
//     { name: "Vietnamese", code: "vi" },
//     { name: "Indonesian", code: "id" },
//     { name: "Malay", code: "ms" },
//     { name: "Filipino", code: "tl" },
//     { name: "Bengali", code: "bn" },
//     { name: "Urdu", code: "ur" },
//     { name: "Persian", code: "fa" },
//     { name: "Hebrew", code: "he" },

//     // Chinese variants
//     // { name: "Chinese (Traditional)", code: "zh-TW" },
//     // { name: "Chinese (Hong Kong)", code: "zh-HK" },

//     // Others
//     { name: "Afrikaans", code: "af" },
//     { name: "Swahili", code: "sw" },
//     { name: "Latvian", code: "lv" },
//     { name: "Lithuanian", code: "lt" },
//     { name: "Estonian", code: "et" }
//   ];

//   useEffect(() => {
//     api.get("/api/trending").then(res => setTrending(res.data.results || [])).catch(console.log);
//   }, []);

//   useEffect(() => {
//     async function fetchMovies() {
//       if (moviesByLang[selectedLang]) {
//         setMovies(moviesByLang[selectedLang]);
//         setLoading(false);
//         return;
//       }
//       setLoading(true);
//       try {
//         const params = selectedLang ? { language: selectedLang } : {};
//         const res = await api.get("/api/movies", { params });
//         setMovies(res.data.results || []);
//         setMoviesByLang(prev => ({ ...prev, [selectedLang]: res.data.results || [] }));
//       } catch (err) {
//         console.log(err);
//         setMovies([]);
//       } finally { setLoading(false); }
//     }
//     fetchMovies();
//   }, [selectedLang]);

//   const handleSearch = useCallback(async () => {
//     if (!searchQuery.trim()) return;
//     setLoading(true);
//     try {
//       const res = await api.get("/api/search", { params: { query: searchQuery } });
//       setMovies(res.data.results || []);
//     } catch (err) { console.log(err); setMovies([]); }
//     finally { setLoading(false); }
//   }, [searchQuery]);

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }} edges={["top"]}>
//       <FlatList
//         data={movies}
//         keyExtractor={item => item.id.toString()}
//         numColumns={2}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 90 }}
//         columnWrapperStyle={{ justifyContent: "space-between" }}
//         renderItem={({ item }) => (
//           <MovieCard movie={item} cardWidth={CARD_WIDTH} />
//         )}
//         ListEmptyComponent={loading ? <ActivityIndicator size="large" style={{ marginTop: 20 }} /> :
//           <Text style={{ textAlign: "center", marginTop: 20, color: colors.text }}>No movies found.</Text>}
//         ListHeaderComponent={
//           <>
//             <View style={styles.header}><Text style={[styles.title, { color: colors.text }]}>🎬 What To Watch</Text></View>
//             <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
//               <TextInput
//                 placeholder="Search movies..."
//                 placeholderTextColor={colors.text + "99"}
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//                 onSubmitEditing={handleSearch}
//                 style={[styles.searchInput, { color: colors.text }]}
//               />
//               <IconButton icon="magnify" size={28} onPress={handleSearch} />
//             </View>

//             <Text style={[styles.sectionTitle, { color: colors.text }]}>🌍 Trending</Text>
//             <FlatList horizontal data={trending} keyExtractor={item => item.id.toString()} renderItem={({ item }) =>
//               <MovieCard movie={item} cardWidth={180} />} showsHorizontalScrollIndicator={false} />

//             <Text style={[styles.sectionTitle, { color: colors.text }]}>Categories</Text>
//             <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//               {languages.map(lang => (
//                 <TouchableOpacity key={lang.code} onPress={() => setSelectedLang(lang.code)} style={[styles.langButton, selectedLang === lang.code && styles.langButtonActive]}>
//                   <Text style={{ color: colors.text }}>{lang.name}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>

//             <Text style={[styles.sectionTitle, { color: colors.text }]}>Movies</Text>
//           </>
//         }
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header: { alignItems: "center", marginBottom: 10 },
//   title: { fontSize: 28, fontWeight: "bold" },
//   searchContainer: { flexDirection: "row", alignItems: "center", marginBottom: 10, borderWidth: 1, borderRadius: 10, paddingHorizontal: 5 },
//   searchInput: { flex: 1, padding: 8, fontSize: 16 },
//   sectionTitle: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
//   langButton: { marginRight: 10, padding: 6, borderWidth: 1, borderRadius: 6 },
//   langButtonActive: { backgroundColor: "#ddd" },
// });







import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { Text, IconButton } from "react-native-paper";
import { MovieStatusContext } from "../context/MovieStatusContext";
import MovieCard from "../components/MovieCard";
import { ThemeContext } from "../context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { api } from "../api";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 30) / 2;

export default function HomeScreen() {
  const { colors } = useContext(ThemeContext);

  const [movies, setMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLang, setSelectedLang] = useState("");
  const [moviesByLang, setMoviesByLang] = useState({});

  /* ✅ Skeleton fake data */
  const skeletonData = Array.from({ length: 8 }).map((_, i) => ({
    id: `skeleton-${i}`,
  }));

  /* ✅ Inline skeleton card */
  const renderSkeletonCard = () => (
    <View style={{ width: CARD_WIDTH, marginBottom: 15 }}>
      <View
        style={{
          height: 220,
          borderRadius: 10,
          backgroundColor: colors.card,
          marginBottom: 8,
        }}
      />
      <View
        style={{
          height: 12,
          width: "80%",
          borderRadius: 6,
          backgroundColor: colors.card,
          marginBottom: 6,
        }}
      />
      <View
        style={{
          height: 12,
          width: "60%",
          borderRadius: 6,
          backgroundColor: colors.card,
        }}
      />
    </View>
  );

  const languages = [
    { name: "Hollywood", code: "en" },
    { name: "Bollywood", code: "hi" },
    { name: "Tamil", code: "ta" },
    { name: "Telugu", code: "te" },
    { name: "Kannada", code: "kn" },
    { name: "Malayalam", code: "ml" },
    { name: "Punjabi", code: "pa" },
    { name: "Marathi", code: "mr" },
    { name: "Arabic", code: "ar" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
    { name: "Japanese", code: "ja" },
    { name: "Korean", code: "ko" },
    { name: "Russian", code: "ru" },
    { name: "Spanish", code: "es" },
    { name: "Chinese (Simplified)", code: "zh" },
    { name: "Italian", code: "it" },
    { name: "Portuguese", code: "pt" },
    { name: "Dutch", code: "nl" },
    { name: "Swedish", code: "sv" },
    { name: "Norwegian", code: "no" },
    { name: "Danish", code: "da" },
    { name: "Finnish", code: "fi" },
    { name: "Polish", code: "pl" },
    { name: "Czech", code: "cs" },
    { name: "Hungarian", code: "hu" },
    { name: "Romanian", code: "ro" },
    { name: "Greek", code: "el" },
    { name: "Turkish", code: "tr" },
    { name: "Ukrainian", code: "uk" },
    { name: "Bulgarian", code: "bg" },
    { name: "Thai", code: "th" },
    { name: "Vietnamese", code: "vi" },
    { name: "Indonesian", code: "id" },
    { name: "Malay", code: "ms" },
    { name: "Filipino", code: "tl" },
    { name: "Bengali", code: "bn" },
    { name: "Urdu", code: "ur" },
    { name: "Persian", code: "fa" },
    { name: "Hebrew", code: "he" },
    { name: "Afrikaans", code: "af" },
    { name: "Swahili", code: "sw" },
    { name: "Latvian", code: "lv" },
    { name: "Lithuanian", code: "lt" },
    { name: "Estonian", code: "et" }
  ];

  useEffect(() => {
    api
      .get("/api/trending")
      .then(res => setTrending(res.data.results || []))
      .catch(console.log);
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      if (moviesByLang[selectedLang]) {
        setMovies(moviesByLang[selectedLang]);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const params = selectedLang ? { language: selectedLang } : {};
        const res = await api.get("/api/movies", { params });
        setMovies(res.data.results || []);
        setMoviesByLang(prev => ({
          ...prev,
          [selectedLang]: res.data.results || [],
        }));
      } catch (err) {
        console.log(err);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [selectedLang]);

  const handleSearch = useCallback(async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const res = await api.get("/api/search", {
        params: { query: searchQuery },
      });
      setMovies(res.data.results || []);
    } catch (err) {
      console.log(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <FlatList
        data={loading ? skeletonData : movies}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 90 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) =>
          loading ? (
            renderSkeletonCard()
          ) : (
            <MovieCard movie={item} cardWidth={CARD_WIDTH} />
          )
        }
        ListEmptyComponent={
          !loading && (
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                color: colors.text,
              }}
            >
              No movies found.
            </Text>
          )
        }
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Text style={[styles.title, { color: colors.text }]}>
                🎬 What To Watch
              </Text>
            </View>

            <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
              <TextInput
                placeholder="Search movies..."
                placeholderTextColor={colors.text + "99"}
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
                style={[styles.searchInput, { color: colors.text }]}
              />
              <IconButton icon="magnify" size={28} onPress={handleSearch} />
            </View>

            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              🌍 Trending
            </Text>

            <FlatList
              horizontal
              data={trending}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <MovieCard movie={item} cardWidth={180} />
              )}
              showsHorizontalScrollIndicator={false}
            />

            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Categories
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {languages.map(lang => (
                <TouchableOpacity
                  key={lang.code}
                  onPress={() => setSelectedLang(lang.code)}
                  style={[
                    styles.langButton,
                    selectedLang === lang.code && styles.langButtonActive,
                  ]}
                >
                  <Text style={{ color: colors.text }}>{lang.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={[styles.sectionTitle, { color: colors.text }]}>
              Movies
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: "center", marginBottom: 10 },
  title: { fontSize: 28, fontWeight: "bold" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  searchInput: { flex: 1, padding: 8, fontSize: 16 },
  sectionTitle: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
  langButton: { marginRight: 10, padding: 6, borderWidth: 1, borderRadius: 6 },
  langButtonActive: { backgroundColor: "#ddd" },
});