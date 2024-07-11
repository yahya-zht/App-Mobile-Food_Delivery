import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import img from "../assets/images/big-burger.png";
export default function CardFood() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={img} style={styles.image} />
      </View>
      <View style={styles.icon}>
        <AntDesign name="hearto" size={20} color="red" />
        {/* <AntDesign name="heart" size={20} color="red" /> */}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text style={styles.nameFood}>Food Name</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <AntDesign name="star" size={20} color="gold" />
            <Text style={{ marginStart: 10, fontSize: SIZES.medium }}>4.7</Text>
          </View>
          <Text
            style={{
              color: COLORS.second,
              fontSize: SIZES.large,
              fontWeight: FONTS.bold,
              marginTop: 3,
            }}
          >
            $15.00
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AntDesign name="pluscircle" size={20} color={COLORS.second} />
          <Text style={{ fontSize: SIZES.large }}>0</Text>
          <AntDesign name="minuscircle" size={20} color={COLORS.second} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: COLORS.cardBg,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: 150,
  },
  nameFood: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  icon: {
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    position: "absolute",
    top: 7,
    right: 7,
  },
});
