import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import NavigationScreens from './src/NavigationContainer/NavigationScreens';
import {Provider} from 'react-redux';
import {store} from './src/Redux/ReduxStore/store';
import Toast from 'react-native-toast-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationScreens />
          <Toast position="bottom" />
        </GestureHandlerRootView>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
