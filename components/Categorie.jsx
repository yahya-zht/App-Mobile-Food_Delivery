import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import img from "../assets/images/fruit-png-picture-thumb.png";
import { COLORS, SIZES } from "../constants/theme";
export default function Categorie(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={props.image} style={styles.image} />
      </View>
      <View>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "auto",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.second,
    borderRadius: 50,
    marginHorizontal: 5,
    paddingEnd: 7,
  },
  containerImage: {
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.medium,
  },
});
