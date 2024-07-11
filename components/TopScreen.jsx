import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function TopScreen(props) {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.topPage}>
      {props.Name == "Home" ? (
        <View style={styles.icon}>
          <Feather name="menu" size={24} color="black" />
        </View>
      ) : (
        <TouchableNativeFeedback onPress={handleClick}>
          <View style={styles.icon}>
            <Entypo name="chevron-left" size={24} color="black" />
          </View>
        </TouchableNativeFeedback>
      )}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Text style={styles.titleScreen}>{props.Name}</Text>
      </View>
      {props.Name == "Home" && (
        <View style={styles.icon}>
          <Entypo name="wallet" size={24} color="black" />
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
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
});
