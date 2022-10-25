
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import button1 from '../components/Button1';

export default Intro = ({img, button_name}) => {
    return (
    <View>
      <Button1 button_name = {button_name}>
      </Button1>
    </View>
    )
}