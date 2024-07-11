import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Router from "./routes/Router";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden />
      {/* <Home /> */}
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
