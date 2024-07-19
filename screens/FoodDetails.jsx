import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
export default function FoodDetails({ route, navigation }) {
  const [counter, setCounter] = useState(0);
  const handleAddition = () => {
    setCounter(counter + 1);
  };
  const handleReduction = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const handleClick = () => {
    navigation.goBack();
  };
  const { FoodData } = route.params;
  
  const handleFavorite = () => {};
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={handleClick}>
        <View style={styles.icon}>
          <Entypo name="chevron-left" size={24} color="white" />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback onPress={handleFavorite}>
        <View style={styles.iconHeart}>
          {FoodData.isFavorite ? (
            <Ionicons name="heart" size={24} color="red" />
          ) : (
            <Ionicons name="heart-outline" size={24} color={COLORS.white} />
          )}
        </View>
      </TouchableNativeFeedback>
      <View style={{ flex: 1 }}>
        <Image source={FoodData.image} style={styles.image} />
      </View>
      <View style={{ flex: 1, margin: 10 }}>
        <Text style={styles.categorie}>{FoodData.category}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{FoodData.name}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableNativeFeedback onPress={handleReduction}>
              <AntDesign name="minuscircle" size={24} color="red" />
            </TouchableNativeFeedback>
            <Text
              style={{
                fontSize: SIZES.large + 5,
                width: 40,
                textAlign: "center",
              }}
            >
              {counter}
            </Text>
            <TouchableNativeFeedback onPress={handleAddition}>
              <AntDesign name="pluscircle" size={24} color={COLORS.second} />
            </TouchableNativeFeedback>
          </View>
        </View>
        <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold }}>
          Description
        </Text>
        <Text style={styles.description}>{FoodData.description}</Text>
      </View>
      <View style={styles.containerButton}>
        <Text
          style={{
            fontSize: SIZES.large + 5,
            fontWeight: FONTS.bold,
            color: COLORS.second,
          }}
        >
          ${FoodData.price}.00
        </Text>
        <View style={styles.button}>
          <Ionicons name="basket" size={24} color="white" />
          <Text
            style={{
              color: COLORS.white,
              padding: 5,
              fontWeight: FONTS.bold,
              fontSize: SIZES.large,
            }}
          >
            Add to order
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    width: "auto",
    flex: 1,
    backgroundColor: COLORS.bg,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#FF5722",
    paddingVertical: 10,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.second,
    flexDirection: "row",
    paddingHorizontal: 30,
  },
  categorie: {
    fontSize: SIZES.medium,
    fontWeight: FONTS.medium,
    color: COLORS.black,
  },
  name: {
    fontSize: SIZES.xLarge,
    fontWeight: FONTS.bold,
    color: COLORS.black,
    marginVertical: 10,
    flex: 1,
  },
  description: {
    fontSize: SIZES.medium,
    fontWeight: FONTS.medium,
    color: COLORS.black,
    marginTop: 10,
    lineHeight: 20,
  },
  icon: {
    borderRadius: 20,
    backgroundColor: COLORS.second,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 100,
  },
  iconHeart: {
    borderRadius: 20,
    backgroundColor: COLORS.second,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 100,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
    alignContent: "center",
    borderRadius: 40,
    backgroundColor: COLORS.cardBg,
    padding: 10,
    marginBottom: 10,
    borderColor: COLORS.second,
    borderWidth: 2,
  },
});
