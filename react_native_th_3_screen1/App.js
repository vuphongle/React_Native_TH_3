import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

const YourApp = () => {
  // Hàm xử lý sự kiện khi bấm vào nút LOGIN
  const handleLoginPress = () => {
    Alert.alert('Login Button Pressed!', 'You pressed the login button.');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'rgb(73, 206, 251)' }}>
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./img/Ellipse8.png')}
          style={{ height: 150, width: 150 }}
        />
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          GROW {'\n'} YOUR BUSINESS
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold' }}>
          We will help you to grow your business using {'\n'} online server
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* Nút LOGIN không có sự kiện onPress */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Nút SIGN UP không có sự kiện onPress */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#e0be00', // Màu nền cho nút
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10, // Bo tròn góc nút
    elevation: 3, // Tạo bóng cho nút
  },
  buttonText: {
    color: '#000', // Màu chữ trắng
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default YourApp;
