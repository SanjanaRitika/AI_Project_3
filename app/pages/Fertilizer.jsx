import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const PredictCrop = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    crop: "",
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handlePredict = () => {
    console.log("Form Data:", formData);
    // Add your prediction logic here
  };

  return (
    <ImageBackground
      source={require("./../../assets/images/backround.png")} // Replace with the path to your background image
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Get informed advice on fertilizer based on soil
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nitrogen"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={formData.nitrogen}
            onChangeText={(value) => handleInputChange("nitrogen", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phosphorus"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={formData.phosphorus}
            onChangeText={(value) => handleInputChange("phosphorus", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Potassium"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={formData.potassium}
            onChangeText={(value) => handleInputChange("potassium", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Crop you want to grow"
            placeholderTextColor="#aaa"
            value={formData.crop}
            onChangeText={(value) => handleInputChange("crop", value)}
          />
          <TouchableOpacity style={styles.button} onPress={handlePredict}>
            <Text style={styles.buttonText}>Predict</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
     backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for readability
    borderRadius: 8,
    textAlign: "center",
    
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PredictCrop;
