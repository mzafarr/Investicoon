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
import Colors from '../../assets/Colors';
import {widthToDp} from '../utils/Responsive';
import Splashscreen from '../StackScreens/SplashScreen/SplashScreen';
import CompanyViewScreen from '../StackScreens/CompanyViewScreen/CompanyViewScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      sceneAnimationEnabled={true}
      shifting={true}
      screenOptions={({route}) => ({
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        tabBarStyle: {
          height: widthToDp(20),
          paddingHorizontal: widthToDp(1),
          paddingTop: 0,
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

// Define stack navigation
function NavigationScreens() {
  return (
    <Stack.Navigator initialRouteName="Splashscreen">
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
        name="Splashscreen"
        options={{headerShown: false}}
        component={Splashscreen}
      />
      <Stack.Screen
        name="DetailsScreen"
        options={{headerShown: false}}
        component={DetailsScreen}
      />
      <Stack.Screen
        name="CompanyViewScreen"
        options={{headerShown: false}}
        component={CompanyViewScreen}
      />
    </Stack.Navigator>
  );
}

export default NavigationScreens;
