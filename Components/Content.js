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
      <Text style={styles.content}>
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
          paddingTop: 150,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#2C7EDB",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            width: 120,
            marginRight: 20,
            height: 40,
          }}
          onPress={() => Alert.alert("I Like It!!")}
        >
          <Text style={styles.buttontext}>This is funny!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#59A061",
            padding: 10,
            width: 120,
            height: 40,
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
    marginLeft: 10,
  },
  content: {
    fontSize: 15,
    color: "grey",
    fontWeight: "600",
    width: 300,
  },
  buttontext: {
    color: "#fff",
  },
});

export default Content;
