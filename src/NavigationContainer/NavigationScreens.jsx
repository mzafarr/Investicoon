import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NewsScreen from '../StackScreens/TabNavigationScreen/NewsScreen';
import HomeScreen from '../StackScreens/TabNavigationScreen/HomeScreen';
import DiscoverScreen from '../StackScreens/TabNavigationScreen/DiscoverScreen';
import ProfileScreen from '../StackScreens/TabNavigationScreen/ProfileScreen';
import DetailsScreen from '../StackScreens/DetailScreen';

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
        name="News"
        options={{headerShown: false}}
        component={NewsScreen}
      />
      <Tab.Screen
        name="Discover"
        options={{headerShown: false}}
        component={DiscoverScreen}
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
    <Stack.Navigator initialRouteName='Tabs'>
      <Stack.Screen
        name="Tabs"
        options={{headerShown: false}}
        component={TabNavigator}
      />
      <Stack.Screen
        name="Details"
        options={{headerShown: false}}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default NavigationScreens;
