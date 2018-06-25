import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
YellowBox.ignoreWarnings(['Remote debugger is in a background tab which may cause apps to perform slowly.'])
AppRegistry.registerComponent('Medhands', () => App);
