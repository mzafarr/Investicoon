import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import NavigationScreens from './src/NavigationContainer/NavigationScreens';
import {Provider} from 'react-redux';
import {store} from './src/Redux/ReduxStore/store';

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NavigationScreens />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
