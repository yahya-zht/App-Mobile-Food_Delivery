import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import TopScreen from "../components/TopScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CardTopHome from "../components/CardTopHome";
import Categorie from "../components/Categorie";
import CardFood from "../components/CardFood";
import NavBar from "../components/NavBar";
import FoodsData from "../assets/Data/FoodData";
import Categories from "../assets/Data/Categories";

export default function Home() {
  return (
    <View style={styles.container}>
      <TopScreen Name={"Home"} icon={"menu"} />
      <View style={styles.containerSearch}>
        <View style={styles.search}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={{ marginEnd: 10 }}
          />
          <TextInput placeholder="Search your food..." />
        </View>
        <View>
          <Ionicons
            name="filter-circle-sharp"
            size={37}
            color={COLORS.second}
          />
        </View>
      </View>
      <FlatList
        ListHeaderComponent={
          <>
            <CardTopHome />
            <View style={{ marginBottom: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 20,
                  marginBottom: 5,
                }}
              >
                <Text style={{ fontSize: SIZES.large, fontWeight: FONTS.bold }}>
                  Categories
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.medium,
                    color: COLORS.second,
                    textDecorationLine: "underline",
                  }}
                >
                  See All Categories
                </Text>
              </View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Categories}
                renderItem={({ item }) => (
                  <Categorie name={item.name} image={item.image} />
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </>
        }
        data={FoodsData}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <CardFood
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
        numColumns={2}
      />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: COLORS.cardBg,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 10,
    height: 40,
    color: COLORS.black,
    fontSize: SIZES.medium,
    fontWeight: FONTS.medium,
    alignItems: "center",
  },
  icon: {
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  containerData: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 5,
    paddingBottom: 60,
  },
  cardContainer: {
    flex: 1,
    margin: 5,
  },
});
