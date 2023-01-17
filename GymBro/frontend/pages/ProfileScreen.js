import React from 'react';
import {View} from "react-native";

import Print_Exercise from '../components/Print_Exercise'

export default ProfileScreen = ({navigation}) => {
    return (
      <View style={{flex:1, blackgroundColor: '#eddfdf'}}>
    <Print_Exercise navigation={navigation}>
    </Print_Exercise>
    </View>
    )
}
  