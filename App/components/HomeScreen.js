import { ImageBackground, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import Intro from '.././pages/Intro'

const image = require('.././images/Get_started.png') ;

export default HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Intro navigation={navigation} img={image} button_name="Get Started"></Intro>
        </View>
      
    );
  };