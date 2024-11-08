import React from 'react';
import {StatusBar} from 'react-native';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {theme} from './src/core/theme';
import AppNavigator from './src/navigation/AppNavigator';
import {persistor, store} from './src/redux/store';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';

export default function App() {
  return (

            <SafeAreaProvider>
              <StatusBar />
              <AppNavigator/>
            </SafeAreaProvider>

  );
}
