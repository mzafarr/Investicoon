import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SubscriptionScreen from '../StackScreens/TabNavigationScreen/SubscriptionScreen';
import HomeScreen from '../StackScreens/TabNavigationScreen/HomeScreen';
import BotScreen from '../StackScreens/TabNavigationScreen/BotScreen';
import ProfileScreen from '../StackScreens/TabNavigationScreen/ProfileScreen';
import DetailsScreen from '../StackScreens/DetailScreen';
import SignUpScreen from '../StackScreens/AuthenticationScreen/SignUpScreen';
import LoginScreen from '../StackScreens/AuthenticationScreen/LoginScreen';
import OtpScreen from '../StackScreens/AuthenticationScreen/OtpScreen';
import OnboardingScreen from '../StackScreens/OnboardingScreen/OnboardingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'logout' : 'logout';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Icons name="home" size={35} color="black" />
        //   ),
        //   headerShown: false,
        // }}
      />
      <Tab.Screen
        name="Subscription"
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Icons name="creditcard" size={35} color="black" />
        //   ),
        //   headerShown: false,
        // }}
        component={SubscriptionScreen}
      />
      <Tab.Screen
        name="AI Bot"
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Icons name="aliwangwang-o1" size={35} color="black" />
        //   ),
        //   headerShown: false,
        // }}
        component={BotScreen}
      />
      <Tab.Screen
        name="Account"
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     <Icons name="user" size={35} color="black" />
        //   ),
        //   headerShown: false,
        // }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

// Define stack navigation
function NavigationScreens() {
  return (
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen
        name="OnboardingScreen"
        options={{headerShown: false}}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name="SignUpScreen"
        options={{headerShown: false}}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{headerShown: false}}
        component={LoginScreen}
      />
      <Stack.Screen
        name="OtpScreen"
        options={{headerShown: false}}
        component={OtpScreen}
      />
      <Stack.Screen
        name="Tabs"
        options={{headerShown: false}}
        component={TabNavigator}
      />
      <Stack.Screen
        name="DetailsScreen"
        options={{headerShown: false}}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default NavigationScreens;
