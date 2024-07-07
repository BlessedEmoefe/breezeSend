import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  NotificationsIcon,
  // AccountIcon,
  // SubscriptionIcon,
} from '../../assets/svg/Icons';


import {HomeNavigator} from './home.navigator';
import GetStarted from '../../features/Authentication/GetStarted/getStarted.screen';
import Home from '../../features/Home/home.screen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Home: 'home',
  // Subscription: 'subscription',
  Notifications: 'notifications',
  // Account: 'account',
};

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICONS[route.name];

  return {
    tabBarIcon: ({size, color}) =>
      iconName === 'home' && (
        <HomeIcon color={color} />
      ) 
      ,
    headerShown: false,
    tabBarActiveBackgroundColor: colors.white,
    tabBarActiveTintColor: '#00AAFF',
  };
};

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Wallets" component={GetStarted} />
      <Tab.Screen name="Convert" component={GetStarted} />
      <Tab.Screen name="Referral" component={GetStarted} />
      <Tab.Screen name="Bills" component={GetStarted} /> */}
    </Tab.Navigator>
  );
};
