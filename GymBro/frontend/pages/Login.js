import { View } from 'react-native';

import Login_Template_Button from '../components/Login_Template_Button';
import Login_Button from '../components/Login_Button';
import Login_Try from '../components/Login_Try';

const Login = ({navigation}) => {
    return (
      <View>
        <Login_Try navigation={navigation} Button_name={"Sign In"}></Login_Try>
      </View>
    )
  }

  export default Login;