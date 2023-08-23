import React, { useState } from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import useAuthStore from '../stores';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavigation = () => {
    const { requestLoggedIn, authUser } = useAuthStore((state) => state);
   const [isAuthenticated, setIsAuthenticated] = useState(requestLoggedIn);
   const [authLoad, setAuthLoad] = useState(false);

  console.log( requestLoggedIn,isAuthenticated,authUser, "storeInse");

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      const token = await AsyncStorage.getItem("token");

      if (user || token) {
        setAuthLoad(true);
        setIsAuthenticated(true);
      } else {
        setAuthLoad(true);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getUser();
  }, [requestLoggedIn]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppNavigation;