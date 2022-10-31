// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {
//   Image,
//   ImageBackground,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import Intro from './pages/Intro'

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */


// const App = () => {
//   return (
//     <View>
//       {/* <Intro button_name="abcsd">
//       </Intro>
//       <Text>
//         Hellooooooo world</Text> */}
//         {/* <Image source={require('./images/Get_started.png')}
//           style= {styles.img1} >
//         </Image> */}
//         <ImageBackground source={require('./images/Get_started.png')} style={{width: '100%', height: '100%'}}>
//         <Intro button_name="abcsd"></Intro>
//         </ImageBackground>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   img1:{
//     width:500, height:500
//   },
//   img2:{
//     flex: 1,
//     width: null,
//     height: null,
//   }
// });

// export default App;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/HomeStack'

// const App = () => {
//   return (
//     <View>
//       {/* <Intro button_name="abcsd">
//       </Intro>
//       <Text>
//         Hellooooooo world</Text> */}
//         {/* <Image source={require('./images/Get_started.png')}
//           style= {styles.img1} >
//         </Image> */}
//         <ImageBackground source={require('./images/Get_started.png')} style={{width: '100%', height: '100%'}}>
//         <Intro button_name="abcsd"></Intro>
//         </ImageBackground>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   img1:{
//     width:500, height:500
//   },
//   img2:{
//     flex: 1,
//     width: null,
//     height: null,
//   }
// });

const App= () => {
    return (
      <HomeStack>
      </HomeStack>
    )
  }

export default App;
