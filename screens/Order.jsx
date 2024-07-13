import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  Text,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import TopScreen from "../components/TopScreen";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import CardFoodFavorites from "../components/CardFoodFavorites";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FoodData from "../assets/Data/FoodData";
export default function Order() {
  const [FoodOnOrder, serFoodOnOrder] = useState(FoodData);
  return (
    <View style={styles.container}>
      <TopScreen Name={"Orders"} />
      <View style={styles.containerArticles}>
        <View style={styles.containerData}>
          <FlatList
            data={FoodOnOrder}
            contentContainerStyle={styles.listContentContainer}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <CardFoodFavorites
                  screen={"Order"}
                  name={item.name}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                  category={item.category}
                  isFavorite={item.isFavorite}
                  description={item.description}
                />
              </View>
            )}
          />
        </View>
      </View>
      <View style={styles.calculate}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              borderColor: COLORS.second,
              borderWidth: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginEnd: 10,
            }}
          >
            <MaterialCommunityIcons
              name="ticket-confirmation"
              size={24}
              color={COLORS.second}
            />
            <TextInput
              placeholder="Promo"
              style={{ marginHorizontal: 10, flex: 1 }}
            ></TextInput>
          </View>
          <View>
            <TouchableNativeFeedback>
              <Text
                style={{
                  backgroundColor: COLORS.second,
                  paddingVertical: 8,
                  paddingHorizontal: 12,
                  borderRadius: 10,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                Apply
              </Text>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={styles.textPrice}>Subtotal</Text>
            <Text>550.0</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={styles.textPrice}>Promo</Text>
            <Text>-150.0</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}
          >
            <Text style={styles.textPrice}>Shipping</Text>
            <Text>-25.0</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
              borderColor: COLORS.second,
              borderTopWidth: 2,
              paddingTop: 10,
            }}
          >
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>415.0</Text>
          </View>
        </View>
        <View>
          <TouchableNativeFeedback>
            <Text
              style={{
                backgroundColor: COLORS.second,
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
                textAlign: "center",
                fontSize: SIZES.large,
                fontWeight: FONTS.bold,
                color: COLORS.white,
              }}
            >
              Confirm Order
            </Text>
          </TouchableNativeFeedback>
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
  containerArticles: {
    flex: 3,
    // backgroundColor: COLORS.second,
    paddingTop: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    // marginBottom: 10,
    paddingBottom: 0,
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textPrice: {
    fontSize: SIZES.medium,
    fontWeight: FONTS.bold,
  },
  calculate: {
    flex: 2,
    marginHorizontal: 20,
    marginVertical: 10,
    marginBottom: 20,
    // borderTopColor: COLORS.second,
    // borderTopWidth: 5,
    // paddingTop: 10,
    // paddingHorizontal: 10,
    // paddingBottom: 20,
    // borderRadius: 20,
  },
  containerData: {
    flex: 1,
  },
  listContentContainer: {
    paddingHorizontal: 5,
  },
  cardContainer: {
    flex: 1,
    margin: 5,
  },
});
