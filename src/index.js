import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import '../ReactotronConfig';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
