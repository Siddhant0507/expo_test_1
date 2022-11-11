import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react';
import styles from './styles';
import {GooglePlacesAutoComplete} from 'react-native-google-places-autocomplete';
// import {GOOGLE_MAPS_APIKEY} from "@env";


const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.mapScreen}></View>
      {/* <GooglePlacesAutoComplete
      placeholder='search your location'
      nearbyPlacesAPI = "GooglePlacesSearch"
      debounce={400}
      query={{
        key:GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
      
      /> */}



      <TouchableOpacity style={styles.buttons} onPress={()=>navigation.navigate('PDateAndTime')}>
      <Text style={styles.buttonText}>Book a Ride </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttons} onPress={()=>alert("Development is in Progress")}>
      <Text style={styles.buttonText}>Explore Packages </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
