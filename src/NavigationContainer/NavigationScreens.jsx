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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Subscription"
        options={{headerShown: false}}
        component={SubscriptionScreen}
      />
      <Tab.Screen
        name="AI Bot"
        options={{headerShown: false}}
        component={BotScreen}
      />
      <Tab.Screen
        name="Account"
        options={{headerShown: false}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

// Define stack navigation
function NavigationScreens() {
  return (
    <Stack.Navigator initialRouteName="OnboardingScreen">
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
