import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#fff",
          fontSize: 15,
          marginBottom: 20,
          fontFamily: "Roboto_500Medium",
        }}
      >
        A joke a day keeps the doctor away
      </Text>
      <Text
        style={{ color: "#fff", fontSize: 9, fontFamily: "Roboto_500Medium" }}
      >
        If you joke wrong way, your teeth have to pay. (Serious)
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 35,
    width: 330,
    marginLeft: 10,
    marginTop: 10,
    flexDirection: "column",
    backgroundColor: "#59B06B",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Header;
