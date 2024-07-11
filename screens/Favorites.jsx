import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { Entypo } from "@expo/vector-icons";
import TopScreen from "../components/TopScreen";
import { COLORS } from "../constants/theme";
import CardFoodFavorites from "../components/CardFoodFavorites";
export default function Favorites() {
  return (
    <View style={styles.container}>
      <TopScreen Name={"Favorites"} />
      <View style={styles.containerArticles}>
        <ScrollView>
          <CardFoodFavorites />
          <CardFoodFavorites />
          <CardFoodFavorites />
          <CardFoodFavorites />
          <CardFoodFavorites />
          <CardFoodFavorites />
          <CardFoodFavorites />
          <CardFoodFavorites />
          <CardFoodFavorites />
        </ScrollView>
      </View>
      <NavBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerArticles: {
    flex: 1,
    backgroundColor: COLORS.second,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 65,
    paddingBottom: 0,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
