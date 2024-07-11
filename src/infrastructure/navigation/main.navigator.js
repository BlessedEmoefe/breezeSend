import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import { BottomTabNavigator } from './bottomTab.navigator';
import Home from '../../features/Home/home.screen';

const Stack = createStackNavigator();

export const MainNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Bottomtab">
        <Stack.Screen name="Bottomtab" component={Home} />
      </Stack.Navigator>
  );
};
