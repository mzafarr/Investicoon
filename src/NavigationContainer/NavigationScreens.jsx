import React from 'react';
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
import Colors from '../../assets/Colors';
import {widthToDp} from '../utils/Responsive';
import Splashscreen from '../StackScreens/SplashScreen/SplashScreen';
import CompanyViewScreen from '../StackScreens/CompanyViewScreen/CompanyViewScreen';
import ChangePasswordScreen from '../StackScreens/ChangePasswordScreen/ChangePasswordScreen';
import FeatureScreen from '../StackScreens/FeatureScreen/FeatureScreen';
import {Platform, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? widthToDp(20) : widthToDp(17),
          paddingBottom: Platform.OS === 'ios' ? widthToDp(5) : widthToDp(4),
          backgroundColor: Colors.backgroundColor,
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Subscription') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'AI Bot') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'white',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Subscription" component={SubscriptionScreen} />
      <Tab.Screen name="AI Bot" component={BotScreen} />
      <Tab.Screen name="Account" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function NavigationScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Splashscreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />

      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Splashscreen" component={Splashscreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <Stack.Screen name="CompanyViewScreen" component={CompanyViewScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="FeatureScreen" component={FeatureScreen} />
    </Stack.Navigator>
  );
}

export default NavigationScreens;
