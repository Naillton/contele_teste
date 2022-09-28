import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';
import MyProvider from './src/context/MyProvider';

export default function App() {
  return (
    <MyProvider>
      <StatusBar style="ligth" />
      <Routes />
    </MyProvider>
  );
}
