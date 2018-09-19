import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import '../ReactotronConfig';
import store from './store';

import Player from './components/Player';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Routes />
      <Player />
    </Fragment>
  </Provider>
);

export default App;
