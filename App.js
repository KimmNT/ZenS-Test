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
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.logo}>HLS</Text>
        <Image
          style={{
            borderRadius: 50,
          }}
          source={{
            width: 50,
            height: 50,
            uri: "http://picsum.photos/200/300",
          }}
        />
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
  },
  logo: {
    fontSize: 30,
  },
});
