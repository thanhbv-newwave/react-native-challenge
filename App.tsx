import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {store} from './src/redux';
import CartListScreen from './src/card/presenter/CardListScreen';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={'light-content'} />
      <CartListScreen />
    </Provider>
  );
};

export default App;
