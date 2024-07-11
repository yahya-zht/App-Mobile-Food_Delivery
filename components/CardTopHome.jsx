import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import img from "../assets/images/24BoOY-food-fruits-free-cut-out.png";

export default function CardTopHome() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.text}>Shop Your Daily Necessary!</Text>
        <TouchableWithoutFeedback>
          <View style={styles.botton}>
            <Text
              style={{
                color: COLORS.white,
                fontWeight: "bold",
                fontSize: SIZES.medium,
              }}
            >
              Free Delivery
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flex: 1 }}>
        <Image source={img} style={styles.image} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.bg,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 150,
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 10,
    borderRadius: 20,
  },
  botton: {
    backgroundColor: COLORS.second,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "flex-start",
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: 100,
  },
  text: {
    fontSize: SIZES.xLarge,
    fontWeight: FONTS.bold,
    width: 190,
  },
});
