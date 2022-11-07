import React from 'react';
import {
  View,
} from 'react-native';

const image = require('.././images/Record_Workout.png') ;

const Record_Workout = ({navigation}) => {
    return (
      <View>
        <Intro navigation={navigation} img={image} button_name="Record Workout"></Intro>
      </View>
    )
  }

  export default Record_Workout;