import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import TopScreen from "../components/TopScreen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CardTopHome from "../components/CardTopHome";
import Categorie from "../components/Categorie";
import CardFood from "../components/CardFood";
import NavBar from "../components/NavBar";
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
          <TextInput placeholder="Search your food..."></TextInput>
        </View>
        <View>
          <Ionicons
            name="filter-circle-sharp"
            size={37}
            color={COLORS.second}
          />
        </View>
      </View>
      <ScrollView>
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
              Sell All Categories
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
              <Categorie />
            </ScrollView>
          </View>
        </View>
        <View style={{ marginBottom: 65 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 20,
              marginBottom: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: SIZES.large, fontWeight: FONTS.bold }}>
              Top Picks
            </Text>
            <View style={styles.icon}>
              <AntDesign name="right" size={24} color="black" />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginHorizontal: 15,
            }}
          >
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
          </View>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topPage: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  icon: {
    borderRadius: 20,
    backgroundColor: COLORS.cardBg,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  titleScreen: {
    fontSize: SIZES.xLarge,
    fontWeight: FONTS.bold,
    color: COLORS.black,
    marginLeft: 10,
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
});
