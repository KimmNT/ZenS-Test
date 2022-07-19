import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Footer(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 375,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            borderTopColor: "black",
            color: "grey",
            padding: 25,
            textAlign: "center",
            fontSize: 10,
            fontWeight: "500",
          }}
        >
          This appis created as part of HLSolutions program. The materials
          con-tained on this website are provided for general information only
          and do not constitude any form of advice. HLS assumes no
          responsobility for the accuracy of any particular statement and
          accepst no liability for any loss or damage which may arise from
          relian on the information contained in this site.
        </Text>
      </View>
      <Text
        style={{
          color: "grey",
          fontSize: 15,
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
    borderTopWidth: 1,
    borderTopColor: "#EBEBEB",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    marginLeft: 10,
  },
});
export default Footer;
