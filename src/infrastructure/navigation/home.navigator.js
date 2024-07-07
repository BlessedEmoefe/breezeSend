import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '../../features/Home/home.screen';
import {PaperProvider} from 'react-native-paper';
// import Search from '../../features/Search/search.screen';
const Stack = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <PaperProvider>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Search" component={Search} /> */}
      </Stack.Navigator>
    </PaperProvider>
  );
};
