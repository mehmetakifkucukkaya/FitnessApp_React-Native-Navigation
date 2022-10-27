import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome Page" component={Welcome} />
        <Stack.Screen name="Sign In Page" component={SignIn} />
        <Stack.Screen name="Member Result Page" component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
