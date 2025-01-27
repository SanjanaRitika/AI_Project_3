import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const PredictCrop = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    phLevel: "",
    rainfall: "",
    state: "",
    city: "",
  });

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handlePredict = () => {
    console.log("Form Data:", formData);
  };

  return (
    <ImageBackground
      source={require("./../../assets/images/backround.png")} // Replace with the path to your background image
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Find out the most suitable crop to grow in your farm
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
            placeholder="pH Level"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={formData.phLevel}
            onChangeText={(value) => handleInputChange("phLevel", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Rainfall (in mm)"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={formData.rainfall}
            onChangeText={(value) => handleInputChange("rainfall", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            placeholderTextColor="#aaa"
            value={formData.state}
            onChangeText={(value) => handleInputChange("state", value)}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            placeholderTextColor="#aaa"
            value={formData.city}
            onChangeText={(value) => handleInputChange("city", value)}
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
    color: "#fff", // Adjust text color to contrast with the background
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent white for input fields
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
