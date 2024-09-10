import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["rgb(206, 244, 246)", "rgb(225, 244, 245)", "rgb(78, 209, 250)"]}
      style={styles.container}
    >
      {/* Icon */}
      <View style={styles.imageContainer}>
        <Image
          source={require("./img/Vector.png")}
          style={{ height: 150, width: 130 }} // Giảm kích thước icon
        />
      </View>

      {/* Tiêu đề */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>FORGET{"\n"} PASSWORD</Text>
      </View>

      {/* Mô tả */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Provide your account’s email for which you {"\n"} want to reset your
          password
        </Text>
      </View>

      {/* Input email với icon */}
      <View style={styles.inputContainer}>
        <Image
          source={require("./img/Email.png")}
          style={styles.icon} // Hình ảnh lá thư
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="gray"
        />
      </View>

      {/* Nút NEXT */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>NEXT</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginTop: 80,
  },
  titleText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  descriptionContainer: {
    paddingHorizontal: 10,
  },
  descriptionText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    backgroundColor: "rgb(196, 196, 196)",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#e0be00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%", 
    alignItems: "center",
    marginBottom: 150,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
