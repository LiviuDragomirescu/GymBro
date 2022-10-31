import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Record_Workout = () => {
    return (
      <View>
          <ImageBackground source={require('./images/Record_Workout.png')} style={{width: '100%', height: '100%'}}>
          <Intro> </Intro>
          </ImageBackground>
      </View>
    )
  }

  export default Record_Workout;