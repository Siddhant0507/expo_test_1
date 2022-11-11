import { Text, View,TouchableOpacity,TextInput, Image } from 'react-native'
import React from 'react';
import styles from './styles'



const SignupScreen = ({navigation}) => {
    const [number, onChangeNumber] = React.useState("");
    const [name, onChangeName] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
   
   
  return (
    <View  style={styles.signupContainer} >
        <Text style={styles.headingText}>Few Steps Away from your journy....</Text>

        <TextInput
          style={styles.loginInput}
          placeholder="Enter full Name"
          onChangeText={(name) => {onChangeName(name)}}
          value={name}
          placeholderTextColor='#444'
          autoCapitalize='none'
          textContentType='userName'
          autoFocus={true}
          keyboardType="email-type"
        />

<TextInput
          style={styles.loginInput}
          placeholder="Enter full Name"
          onChangeText={(email) => {onChangeName(email)}}
          value={email}
          placeholderTextColor='#444'
          autoCapitalize='none'
          textContentType='userName'
          autoFocus={true}
          keyboardType="email-type"
        />
        <TextInput
          style={styles.loginInput}
          onChangeText={onChangeNumber}
          value={number}
          placeholderTextColor='#444'
          placeholder="Enter Your Number"
          keyboardType="numeric"
        />

        <TouchableOpacity onPress={()=>navigation.navigate('homeScreen')}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </View>
        </TouchableOpacity> 

        
        
    </View>
  )
}

export default SignupScreen

