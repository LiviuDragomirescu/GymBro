import React, { Component } from 'react';
import { useState , useEffect} from "react";
import { Text , FlatList, Card, Alert, View} from "react-native";

import Print_Exercise from '../components/Print_Exercise'

// export class ProfileScreen extends Component {
//   render() {
//     return (
//     <Print_Exercise>
//     </Print_Exercise>
//     )
//   }
// }

export default ProfileScreen = ({navigation}) => {
    return (
      <View style={{flex:1, blackgroundColor: '#eddfdf'}}>
    <Print_Exercise navigation={navigation}>
    </Print_Exercise>
    </View>
    )
}
  