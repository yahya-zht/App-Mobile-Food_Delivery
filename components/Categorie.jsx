import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import img from "../assets/images/fruit-png-picture-thumb.png";
import { COLORS, SIZES } from "../constants/theme";
export default function Categorie() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={img} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>Fruits</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 105,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.second,
    borderRadius: 50,
    marginHorizontal: 5,
    // paddingHorizontal: 10,
  },
  containerImage: {
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.large,
  },
});
