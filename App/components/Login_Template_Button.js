
import { ImageBackground, StyleSheet, View, TextInput} from 'react-native';


export default login_template_Button = ({navigation, img, Button_type, Button_name}) => {
    return (
    <View>
      <ImageBackground source={img} style={styles.image}>
        <TextInput style={styles.text}>
        </TextInput>
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
  }
});