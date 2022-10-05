/**
 * @format
 */
// Não mudar a posição do import react-native-gesture-handle
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
AppRegistry.registerComponent(appName, () => App);
