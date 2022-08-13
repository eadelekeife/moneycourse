import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homepage from './screens/homepage';
import Payment from './screens/payment';
import History from './screens/history';
import Splash from './screens/splash';
import LogIn from './screens/login';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;