import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import styles from "./styles";
import { useRef, useState } from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>
        Enter Phone Number for varification
      </Text>
      <Text style={styles.subHeadingText}>
        This number will be used for all ride-related communication. You shall
        receive an SMS with code for varification.
      </Text>
      <Text style={styles.subHeadingText}>Note : Start number with +91</Text>

      <TextInput
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        autoCompleteType="tel"
        style={styles.loginInput}
      />
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('homeScreen')}>
        <Text style={styles.buttonText}> Send Otp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
