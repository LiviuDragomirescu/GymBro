import {View} from 'react-native';

import Template_Button from '../components/Template_Button';
import Test_Button from '../components/Test_Button';

const image = require('.././images/Weight_History.jpg') ;

const Weight_History = ({navigation}) => {
    return (
      <View>
        <Template_Button navigation={navigation} img={image} Button_type={Test_Button} Button_name={"Weight Hystory"}></Template_Button>
      </View>
    )
  }

  export default Weight_History;