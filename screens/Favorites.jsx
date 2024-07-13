import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import TopScreen from "../components/TopScreen";
import { COLORS } from "../constants/theme";
import FoodsData from "../assets/Data/FoodData";
import CardFoodFavorites from "../components/CardFoodFavorites";
export default function Favorites() {
  const FoodFavorites = FoodsData.filter((f) => f.isFavorite === true);
  return (
    <View style={styles.container}>
      <TopScreen Name={"Favorites"} />
      <View style={styles.containerArticles}>
        <View style={styles.containerData}>
          <FlatList
            data={FoodFavorites}
            contentContainerStyle={styles.listContentContainer}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <CardFoodFavorites
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  category={item.category}
                  isFavorite={item.isFavorite}
                  description={item.description}
                />
              </View>
            )}
          />
        </View>
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
    paddingVertical: 5,
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
  containerData: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 5,
  },
  cardContainer: {
    flex: 1,
    margin: 5,
  },
});
