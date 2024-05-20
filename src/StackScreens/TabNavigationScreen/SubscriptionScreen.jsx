import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Colors from '../../../assets/Colors';

const SubscriptionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback>
        <Text style={styles.text}>Click here</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.black,
  },
});

export default SubscriptionScreen;
