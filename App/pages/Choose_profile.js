import { View } from 'react-native';

import Choose_Prof_button from '../components/Choose_Prof_button';
import Login_Button from '../components/Login_Button';

const image = require('.././images/background.png') ;

const Choose_profile = ({navigation}) => {
    return (
      <View>
        <Choose_Prof_button navigation={navigation} img={image} button_name={"Choose_Profile"}></Choose_Prof_button>
      </View>
    )
  }

export default Choose_profile;