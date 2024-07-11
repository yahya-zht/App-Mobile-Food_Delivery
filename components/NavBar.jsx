import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function NavBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        style={styles.buttonClick}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.buttonClick}>
          <AntDesign name="home" size={20} color="white" />
          <Text style={{ color: COLORS.white }}>Home</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate("Favorites");
        }}
      >
        <View style={styles.button}>
          <Feather name="heart" size={20} color={COLORS.second} />
          <Text style={{ color: COLORS.second }}>Favorites</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate("Order");
        }}
      >
        <View style={styles.button}>
          <FontAwesome5 name="clipboard-list" size={20} color={COLORS.second} />
          <Text style={{ color: COLORS.second }}>Order</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <View style={styles.button}>
          <FontAwesome6 name="user-circle" size={20} color={COLORS.second} />
          <Text style={{ color: COLORS.second }}>Profile</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 10,
    marginHorizontal: 15,
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 5,
  },
  buttonClick: {
    width: "22%",
    height: 40,
    paddingTop: 6,
    padding: 5,
    backgroundColor: COLORS.second,
    borderRadius: 15,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "22%",
    height: 40,
    paddingTop: 6,
    padding: 5,
    borderRadius: 15,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
