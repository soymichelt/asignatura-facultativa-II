/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import Principal from './src/components/principal';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Principal);
