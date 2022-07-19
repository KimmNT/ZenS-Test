import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

function Content(props) {
  const [Joke, setJoke] = useState("Loading...");
  const randomJoke = () => {
    fetch(`http://api.icndb.com/jokes/random`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.value.joke);
        setJoke(result.value.joke);
      });
  };
  useEffect(() => {
    randomJoke();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        {/* A child asked his father, "How were people born?" So his father said,
        "Adam and Eve made babies, then their babies became adults and made
        babies, and so on." The child then went to his mother, asked her the
        same question and she told him, "We were monkeys then we evolved to
        become like we are now." The child ran back to his father and said, "You
        lied to me!" His father replied, "No, your mom was talking about her
        side of the family." */}
        {Joke}
      </Text>
      <View
        style={{
          paddingTop: 150,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#447CD3",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            height: 35,
            width: 110,
            marginRight: 20,
          }}
          onPress={randomJoke}
        >
          <Text style={styles.buttontext}>This is Funny!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#59B06B",
            padding: 10,
            height: 35,
            width: 110,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={randomJoke}
        >
          <Text style={styles.buttontext}>This is not Funny.</Text>
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
    fontFamily: "Roboto_500Medium",
  },
  content: {
    fontSize: 13,
    color: "#7A7A7A",
    width: 260,
    height: 200,
    fontFamily: "Roboto_500Medium",
    letterSpacing: 0.5,
    lineHeight: 15,
  },
  buttontext: {
    color: "#fff",
    fontSize: 10,
    fontFamily: "Roboto_500Medium",
  },
});

export default Content;
