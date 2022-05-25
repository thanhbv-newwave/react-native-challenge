import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import CardListViewModel from './src/viewModel/CardListViewModel';

const App = () => {
  return (
    <Provider store={store}>
        <StatusBar barStyle={'light-content'} />
        <CardListViewModel />
    </Provider>
  );
};

export default App;
