import React, {FC} from 'react';
import Router from 'router';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

const App: FC = () => {
  return <Router />;
};

export default App;
