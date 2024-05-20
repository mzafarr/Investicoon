import React from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import NavigationScreens from './src/NavigationContainer/NavigationScreens';
import {Provider} from 'react-redux';
import {store} from './src/Redux/ReduxStore/store';
import Toast from 'react-native-toast-message';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Colors from './assets/Colors';
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,

    background: Colors.background,
  },
};
function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Provider store={store}>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <NavigationScreens />
            <Toast position="bottom" />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
