import { View } from 'react-native';

import Login_Template_Button from '../components/Login_Template_Button';
import Login_Button from '../components/Login_Button';

const image = require('.././images/background.png') ;

const Login = ({navigation}) => {
    return (
      <View>
        <Login_Template_Button navigation={navigation} img={image} Button_type={Login_Button} Button_name={"Sign In"}></Login_Template_Button>
      </View>
    )
  }

  export default Login;