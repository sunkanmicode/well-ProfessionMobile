import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const AppNavigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
    
  )
}

export default AppNavigation;