import {View} from 'react-native';

import Home_Button from '../components/Home_Button';
import Template_Button from '../components/Template_Button';

const image = require('.././images/Get_started.png') ;

export default HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Template_Button navigation={navigation} img={image} Button_type={Home_Button} Button_name={"Get Started"}></Template_Button>
        </View>
      
    );
  };