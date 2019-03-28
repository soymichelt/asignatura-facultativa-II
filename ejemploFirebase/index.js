/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { InitializeApp } from './lib/data/config';

AppRegistry.registerComponent(appName, () => App);