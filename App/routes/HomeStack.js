import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../pages/HomeScreen'
import RecordWorkout from '../pages/RecordWorkout';
import ProfileScreen from '../pages/ProfileScreen'
import ProgressHistory from '../pages/ProgressHistory';
import WeightHistory from '../pages/WeightHistory';

const Stack = createNativeStackNavigator();

// aici definesc screenurile si dupa ma mut in aplicatie doar dupa name

export default MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home_Screen"
          component={HomeScreen}
        />
        <Stack.Screen name="Record_Workout" component={RecordWorkout}/>
        <Stack.Screen name="Progress_History" component={ProgressHistory} options={{headerShown: false}}/>
        <Stack.Screen name="Weight_History" component={WeightHistory} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
