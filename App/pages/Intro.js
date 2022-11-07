import { ImageBackground, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

import Yellow_Button from '../components/Yellow_Button';
import Test_Button from '../components/Test_Button';

export default Intro = ({navigation, img, button_name}) => {
    return (
    <View>
      <ImageBackground source={img} style={styles.image}>
        {/* <Yellow_Button navigation={navigation} button_name={button_name} >
        </Yellow_Button> */}
        <Test_Button button_name={button_name} navigation={navigation}>
        </Test_Button>
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