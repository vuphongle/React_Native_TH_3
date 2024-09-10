import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <LinearGradient
      colors={["rgb(206, 244, 246)", "rgb(225, 244, 245)", "rgb(78, 209, 250)"]}
      style={styles.container}
    >
      {/* Icon */}
      <View style={styles.imageContainer}>
        <Text style={{ fontSize: 70, fontWeight: "bold" }}>CODE</Text>
      </View>

      {/* Tiêu đề */}
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>VERIFICATION</Text>
      </View>

      {/* Mô tả */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          Enter onetime password sent on {"\n"} +849092605798
        </Text>
      </View>

      {/* Ô nhập mã code */}
      <View style={styles.codeContainer}>
        {code.map((value, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            value={value}
            onChangeText={(text) => handleChangeText(text, index)}
            maxLength={1}
            keyboardType="numeric"
            textAlign="center"
          />
        ))}
      </View>

      {/* Nút NEXT */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  textContainer: {
    marginTop: 10,
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
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  codeInput: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#f0f0f0",
    width: 50,
    height: 50,
    fontSize: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#e0be00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 150 ,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
