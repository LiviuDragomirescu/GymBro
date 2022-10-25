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


export default Button1 = ({button_name}) => {
    return (
    <View style = {styles.button}>
      <Text style = {styles.text}>
        {button_name}
      </Text>
    </View>
    )
}
const styles = StyleSheet.create({
  button:{
    display: "flex", justifyContent: "center", alignContent: "center",
    backgroundColor: "#00ffff",
    borderRadius: "50px"
  },
  text:{
    fontWeight: "bold", color: "#ffff00",
  }
});
