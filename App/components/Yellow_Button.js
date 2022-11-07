import { ImageBackground, StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';

export default Yellow_Button = ({navigation, button_name}) => {
    return (
        <TouchableOpacity  
        style ={styles.highlight}>
          <Button
          title = {button_name}
          color = 'yellow'
          onPress={() =>
              navigation.navigate('Profile', { name: 'Jane' })
                  }
          />
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    highlight: {
        marginTop :400,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });