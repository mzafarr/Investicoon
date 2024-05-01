import React from 'react';
import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default DetailsScreen;
