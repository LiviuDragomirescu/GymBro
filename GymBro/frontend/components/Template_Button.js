import { ImageBackground, StyleSheet, View, Text} from 'react-native';

export default template_Button = ({navigation, img, Button_type, Button_name, username}) => {
    return (
    <View>
      <ImageBackground source={img} style={styles.image}>
        <Text> PULA MEA MARE E AICI SPER CA SE SCRIE CEVA {username}</Text>
        <Button_type button_name={Button_name} navigation={navigation} username={username}>
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