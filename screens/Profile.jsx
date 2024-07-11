import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import TopScreen from "../components/TopScreen";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import avatar from "../assets/avatar/avatar03.jpeg";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
export default function Profile() {
  return (
    <View style={styles.container}>
      <TopScreen Name="Profile" />
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: 60,
          left: 50,
          right: 50,
          zIndex: 1,
        }}
      >
        <View>
          <Image source={avatar} style={styles.avatar} />
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: SIZES.large,
              fontWeight: FONTS.bold,
            }}
          >
            Yahya
          </Text>
          <Text style={{ textAlign: "center", fontSize: SIZES.medium }}>
            yahya@gmail.com
          </Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <View style={styles.button}>
          <AntDesign name="edit" size={24} color="black" />
          <Text style={styles.text}>Edit Profile</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
        <View style={styles.button}>
          <AntDesign name="hearto" size={24} color="black" />
          <Text style={styles.text}>Favorites</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
        <View style={styles.button}>
          <Octicons name="location" size={24} color="black" />
          <Text style={styles.text}>Location </Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
        <View style={styles.button}>
          <MaterialIcons name="history" size={24} color="black" />
          <Text style={styles.text}>History</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
        <View style={styles.button}>
          <AntDesign name="exclamationcircleo" size={24} color="black" />
          <Text style={styles.text}>About</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
        <View style={styles.button}>
          <MaterialIcons name="lock" size={24} color="black" />
          <Text style={styles.text}>Change Password</Text>
          <Entypo name="chevron-right" size={24} color="black" />
        </View>
        <View style={styles.button}>
          <SimpleLineIcons name="logout" size={24} color="black" />
          <Text style={styles.text}>Logout</Text>
          <Entypo name="chevron-right" size={24} color="black" />
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
    borderColor: COLORS.second,
    borderWidth: 2,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.second,
    borderWidth: 1,
  },
  text: {
    flex: 1,
    fontSize: SIZES.medium,
    marginStart: 10,
    fontWeight: FONTS.bold,
  },
  containerButton: {
    backgroundColor: COLORS.cardBg,
    marginHorizontal: 20,
    marginVertical: 20,
    marginTop: 70,
    padding: 20,
    borderRadius: 20,
    paddingTop: 140,
    borderColor: COLORS.second,
    borderWidth: 2,
  },
});
