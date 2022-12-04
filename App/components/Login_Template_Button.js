import React from 'react';
import { ImageBackground, StyleSheet, View, TextInput} from 'react-native';


export default login_template_Button = ({navigation, img, Button_type, Button_name}) => {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
    return (
    <View>
      <ImageBackground source={img} style={styles.image}>
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
  text: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:"#000000",
    borderColor:"#ffffff",
    backgroundColor:"#ffffff"
  },
});