import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["rgb(206, 244, 246)", "rgb(225, 244, 245)", "rgb(78, 209, 250)"]}
      style={styles.container}
    >
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("./img/Ellipse8.png")}
          style={{ height: 150, width: 150 }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}>
          GROW {"\n"} YOUR BUSINESS
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "bold" }}>
          We will help you to grow your business using {"\n"} online server
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 20, 
  },
  button: {
    backgroundColor: "#e0be00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    elevation: 3,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 100,
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
