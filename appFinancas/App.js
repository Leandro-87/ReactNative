import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Routes from './src/routes/index';

export default function App(){
    return(
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    );
  }
