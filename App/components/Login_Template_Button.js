import React from 'react';
import { ImageBackground, Image, StyleSheet, View, Text, TextInput} from 'react-native';


export default login_template_Button = ({navigation, img, Button_type, Button_name}) => {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
    return (
    <View>
      <ImageBackground source={img} style={styles.image}>
      <Image source={require('.././images/logofinal.png') } style={styles.logo1}/>
      <TextInput
          style={styles.input}
          onChangeText={onChangeNumber1}
          value={number1}
          placeholder="Phone/Email"
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangeNumber2}
          value={number2}
          placeholder="Password"
        />
        <Button_type button_name={Button_name} navigation={navigation}>
        </Button_type>
        <Text style={{ color: 'white', top: -170, left: 140} }> Forgot Password? </Text>
        <Image source={require('.././images/facebook.png') } style={styles.logo2}/>
        <Image source={require('.././images/google.png') } style={styles.logo3}/>
        <Text style={{ color: 'white', top: -30, left: 25} }> Don't Have an Account? </Text>
      </ImageBackground>
    </View>
    )
}

const styles = StyleSheet.create({
  image: {
      resizeMode: 'cover',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    logo1: {
      top: 100,
      left: 150,
      justifyContent: 'center',
      width: 100,
      height: 100
    },
    logo2: {
      top: -120,
      left: 160,
      justifyContent: 'center',
      width: 30,
      height: 30
    },
    logo3: {
      top: -152,
      left: 200,
      justifyContent: 'center',
      width: 37,
      height: 37
    },
  text: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    top: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:"#000000",
    borderColor:"#ffffff",
    backgroundColor:"#ffffff"
  },
});