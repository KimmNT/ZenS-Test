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
import { AppLoading } from "expo";
import {
  useFonts,
  Roboto_300Light,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_300Light,
    Roboto_400Regular,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        <Image
          style={{
            borderRadius: 50,
            width: 50,
            height: 50,
            marginTop: 10,
          }}
          source={require("./assets/hls.jpg")}
        />
        <View
          style={{
            flexDirection: "row",
            marginLeft: 130,
            marginTop: 10,
          }}
        >
          <View
            style={{
              marginTop: 19,
              marginRight: 5,
            }}
          >
            <Text style={{ color: "grey", fontSize: 10 }}>Handicrafted by</Text>
            <Text
              style={{ color: "#4D4D4D", textAlign: "right", fontSize: 12 }}
            >
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
    fontFamily: "Roboto_400Regular",
  },
});
