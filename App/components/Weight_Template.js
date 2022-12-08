import React, { useState } from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

const initialState = {
  react: false,
  next: false,
  vue: false,
  angular: false,
};

export default weight_template = ({img}) => {

    return (
    <View>
      <ImageBackground source={img} style={styles.image}>
      <Text style={styles.baseText}>Gym
        <Text style={styles.innerText}>Bro </Text>
      </Text>
      <Text style={styles.baseText}>
      <Text style={styles.innerText}>Your Weight Over 6 Weeks </Text>
      </Text>
      </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
  baseText: {
    top: 40,
    color: 'white',
    fontWeight: 'bold',
    fontSize:24,
    textAlign: 'center'
},
innerText: {
    color: 'yellow'
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  },
});