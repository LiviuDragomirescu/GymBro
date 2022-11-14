import {View} from 'react-native';

import Template_Button from '../components/Template_Button';
import Progress_Button from '../components/Progress_Button';

const image = require('.././images/Arnold.jpg') ;

const Progress_History = ({navigation}) => {
    return (
      <View>
        <Template_Button navigation={navigation} img={image} Button_type={Progress_Button} Button_name={"Progress History"}></Template_Button>
      </View>
    )
  }

  export default Progress_History;