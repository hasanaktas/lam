import 'react-native-gesture-handler';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {firebaseConfig} from 'utils';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({experimentalForceLongPolling: true});
}

AppRegistry.registerComponent(appName, () => App);
