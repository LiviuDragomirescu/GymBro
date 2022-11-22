import { View } from 'react-native';

import Login_Template_Button from '../components/Login_Template_Button';
import Test_Button from '../components/Test_Button';

const image = require('.././images/background.png') ;

const Login = ({navigation}) => {
    return (
      <View>
        <Login_Template_Button navigation={navigation} img={image} Button_type={Test_Button} Button_name={"          Login"}></Login_Template_Button>
      </View>
    )
  }

  export default Login;