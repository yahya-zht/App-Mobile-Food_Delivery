import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import img from "../assets/images/big-burger.png";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
export default function CardFoodFavorites() {
  return (
    <View style={styles.container}>
      <View style={{ width: 100 }}>
        <Image source={img} style={styles.image} />
      </View>
      <View style={{ flex: 1, marginEnd: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Big Burger</Text>
        <Text style={{ color: "#666", fontSize: 14 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: COLORS.second, fontSize: SIZES.large }}>
            $12.99
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="star" size={15} color="gold" />
            <Text style={{ marginStart: 5, fontSize: SIZES.medium }}>4.7</Text>
          </View>
        </View>
      </View>
      <View style={{ width: 20 }}>
        <MaterialCommunityIcons name="delete" size={24} color="red" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    shadowRadius: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "static",
  },
  image: {
    width: "100%",
    height: 90,
  },
});
