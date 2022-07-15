import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View,
  SafeAreaView,
} from "react-native";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={{
            width: 70,
            height: 70,
            uri: "data:image/jpeg;base64,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",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            marginLeft: 120,
            marginTop: 10,
          }}
        >
          <View
            style={{
              marginTop: 10,
              marginRight: 5,
            }}
          >
            <Text style={{ color: "grey" }}>Handicrafted by</Text>
            <Text style={{ color: "#4D4D4D", textAlign: "right" }}>
              Jim HLS
            </Text>
          </View>
          <Image
            style={{
              borderRadius: 50,
              width: 40,
              height: 40,
              marginTop: 10,
            }}
            source={require("./assets/user.jpg")}
          />
        </View>
      </View>
      <Header />
      <Content />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
});
