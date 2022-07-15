import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 20, marginBottom: 20 }}>
        A joke a day keeps the doctor away
      </Text>
      <Text style={{ color: "#fff", fontSize: 13 }}>
        If you joke wrong way, your teeth have to pay. (Serious)
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 30,
    backgroundColor: "#4caf50",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Header;
