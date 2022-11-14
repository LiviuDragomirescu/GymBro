import { ImageBackground, StyleSheet, View} from 'react-native';

export default template_Button = ({navigation, img, Button_type, Button_name}) => {
    return (
    <View>
      <ImageBackground source={img} style={styles.image}>
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
});