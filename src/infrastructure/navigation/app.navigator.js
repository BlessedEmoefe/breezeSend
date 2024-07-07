import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {AuthNavigator} from './auth.navigator';
// import {SideDrawerNavigator} from './side-drawer.navigator';
// import SplashScreen from "../../features/Authentication/Splash/splash.screen";
// import {BottomTabNavigator} from './bottomTab.navigator';
// import {HomeNavigator} from './home.navigator';
import {MainNavigator} from './main.navigator';

export const AppNavigator = () => {
  const isUser = true;

  return (
    <NavigationContainer>
      {isUser ? <MainNavigator /> : <AuthNavigator />}
      {/* <SideDrawerNavigator /> */}
    </NavigationContainer>
  );
};
