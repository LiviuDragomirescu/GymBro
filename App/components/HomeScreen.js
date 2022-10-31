import { Button } from "react-native";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import Intro from '.././pages/Intro'

export default HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
            title="Go to Jane's profile"
            onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
                }
            />
            <ImageBackground source={require('.././images/Get_started.png')} style={{width: '100%', height: '100%'}}>
            <Intro button_name="abcsd"></Intro>
            </ImageBackground>
        </View>
      
    );
  };