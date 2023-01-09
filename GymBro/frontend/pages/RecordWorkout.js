import { View } from 'react-native';

import Template_Button from '../components/Template_Button';
import Test_Button from '../components/Test_Button';

const image = require('.././images/Record_Workout.png') ;

const Record_Workout = ({navigation}) => {
    return (
      <View>
        <Template_Button navigation={navigation} img={image} Button_type={Test_Button} Button_name={"Record Workout"}></Template_Button>
      </View>
    )
  }

  export default Record_Workout;