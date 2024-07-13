import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
export default function CardFood(props) {
 
  const [counter, setCounter] = useState(0);
  const handleAddition = () => {
    setCounter(counter + 1);
  };
  const handleReduction = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const navigation = useNavigation();
  const FoodData = props;
  const handleClick = () => {
    navigation.navigate("FoodDetails", { FoodData });
  };
  return (
    <TouchableNativeFeedback onPress={handleClick}>
      <View style={styles.container}>
        <View>
          <Image source={props.image} style={styles.image} />
        </View>
        <View style={styles.icon}>
          {/* <AntDesign name="hearto" size={20} color="red" /> */}
          {props.isFavorite ? (
            <Ionicons name="heart" size={24} color="red" />
          ) : (
            <Ionicons name="heart-outline" size={24} color="red" />
          )}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.nameFood}>{props.name}</Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <AntDesign name="star" size={20} color="gold" />
              <Text style={{ marginStart: 10, fontSize: SIZES.medium }}>
                {props.rating}
              </Text>
            </View>
            <Text
              style={{
                color: COLORS.second,
                fontSize: SIZES.large,
                fontWeight: FONTS.bold,
                marginTop: 3,
              }}
            >
              ${props.price}.00
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableNativeFeedback onPress={handleAddition}>
              <AntDesign name="pluscircle" size={20} color={COLORS.second} />
            </TouchableNativeFeedback>
            <Text
              style={{
                fontSize: SIZES.large,
                height: 30,
                textAlignVertical: "center",
              }}
            >
              {counter}
            </Text>
            <TouchableNativeFeedback onPress={handleReduction}>
              <AntDesign name="minuscircle" size={20} color={COLORS.second} />
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: COLORS.cardBg,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
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
