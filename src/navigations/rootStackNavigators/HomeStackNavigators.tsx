import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/mainScreens/HomeScreen";
import TopRatedScreen from "../../screens/mainScreens/TopRatedScreen";
import TrendingScreen from "../../screens/mainScreens/TrendingScreen";
import ViewProfileScreen from "../../screens/mainScreens/ViewProfileScreen";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigators = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="TopRatedScreen"
          component={TopRatedScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="TrendingScreen"
          component={TrendingScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ViewProfileScreen"
          component={ViewProfileScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigators;
