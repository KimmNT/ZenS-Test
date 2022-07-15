import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 17, marginBottom: 20 }}>
        A joke a day keeps the doctor away
      </Text>
      <Text style={{ color: "#fff", fontSize: 10 }}>
        If you joke wrong way, your teeth have to pay. (Serious)
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 45,
    width: 380,
    marginLeft: 10,
    flexDirection: "column",
    backgroundColor: "#59A061",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Header;
