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
        }}
      >
        This appis created as part of HLSolutions program. The materials
        contained on this website are provided for general information only and
        do not constitude any form of advice. HLS assumes no responsobility for
        the accuracy of any particular statement and accepst no liability for
        any loss or damage which may arise from relian on the information
        contained in this site.
      </Text>
      <Text style={{ color: "grey", fontSize: 20, fontWeight: "bold" }}>
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
  },
});
export default Footer;
