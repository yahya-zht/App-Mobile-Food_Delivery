import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React from "react";
import image from "../assets/images/box-italian-pizza.png";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function FoodDetails() {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.goBack();
  };
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
          <AntDesign name="hearto" size={20} color="white" />
        </View>
      </TouchableNativeFeedback>
      <View style={{ borderBottomLeftRadius: 50 }}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={{ flex: 1, margin: 10 }}>
        <Text style={styles.categorie}>Pizza</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>Box italian Pizza</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="minuscircle" size={24} color={COLORS.second} />
            <Text style={{ fontSize: SIZES.large + 5, marginHorizontal: 10 }}>
              0
            </Text>
            <AntDesign name="pluscircle" size={24} color={COLORS.second} />
          </View>
        </View>
        <Text style={{ fontSize: SIZES.medium, fontWeight: FONTS.bold }}>
          Description
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          metus nec nisi euismod tempus vel at lectus. Sed lobortis facilisis
          velit, vel elementum nunc semper vel.
        </Text>
      </View>
      <View style={styles.containerButton}>
        <Text
          style={{
            fontSize: SIZES.large + 5,
            fontWeight: FONTS.bold,
            color: COLORS.second,
          }}
        >
          $15.00
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
            Add to Cart
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
