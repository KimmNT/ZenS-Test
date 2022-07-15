import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Footer(props) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          borderTopColor: "black",
          color: "grey",
          textAlign: "center",
          marginBottom: 10,
          fontSize: 10,
          marginLeft: 10,
          marginTop: 10,
          width: 300,
        }}
      >
        This appis created as part of HLSolutions program. The materials
        contained on this website are provided for general information only and
        do not constitude any form of advice. HLS assumes no responsobility for
        the accuracy of any particular statement and accepst no liability for
        any loss or damage which may arise from relian on the information
        contained in this site.
      </Text>
      <Text
        style={{
          color: "grey",
          fontSize: 15,
          fontWeight: "500",
          marginBottom: 10,
        }}
      >
        Copyright 2021 HLS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: 380,
    borderTopWidth: 1,
    borderTopColor: "#EBEBEB",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
});
export default Footer;
