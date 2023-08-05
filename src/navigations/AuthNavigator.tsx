import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/authScreens/LoginScreen";
import RegisterScreen from "../screens/authScreens/RegisterScreen";
import OnboardingScreen from "../screens/authScreens/OnboardingScreen";


type AuthStackParamList = {
  "Onboarding": undefined;
  "Login": undefined;
  "Register": undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = ()=>{

    return (
      <AuthStack.Navigator screenOptions={{ header: () => null }}>
        <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
      </AuthStack.Navigator>
    );

}

export default AuthNavigator;