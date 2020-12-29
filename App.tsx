import * as React from 'react';
import Router from 'router';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  return <Router />;
};

export default App;
