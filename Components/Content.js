import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

function Content(props) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 17, color: "grey", fontWeight: "400" }}>
        A child asked his father, "How were people born?" So his father said,
        "Adam and Eve made babies, then their babies became adults and made
        babies, and so on." The child then went to his mother, asked her the
        same question and she told him, "We were monkeys then we evolved to
        become like we are now." The child ran back to his father and said, "You
        lied to me!" His father replied, "No, your mom was talking about her
        side of the family."
      </Text>
      <View
        style={{
          paddingTop: 70,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            marginRight: 70,
            backgroundColor: "#2196f3",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            width: 150,
          }}
          onPress={() => Alert.alert("I Like It!!")}
        >
          <Text style={styles.buttontext}>This is funny!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#4caf50",
            padding: 10,
            width: 150,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => Alert.alert("I Don't Like It!!")}
        >
          <Text style={styles.buttontext}>This is not funy!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    color: "#fff",
  },
});

export default Content;
