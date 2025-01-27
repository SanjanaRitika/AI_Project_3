import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { ImageBackground } from "react-native";

const Index = () => {
  return (
    <ImageBackground
      source={require("./../assets/images/backround2.png")} // Replace with the path to your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Link
          href="/pages/Crop"
          style={styles.link}
        >
          Get suitable crop suggestions
        </Link>

        <Link
          href="/pages/Fertilizer"
          style={styles.link}
        >
          Get suitable fertilizer suggestions
        </Link>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
    borderRadius: 8,
    textAlign: "center",
    width: "80%",
  },
});

export default Index;
