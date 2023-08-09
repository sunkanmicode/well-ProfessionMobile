import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigations';
import { useFonts } from "expo-font";

export default function App() {
   const [fontsLoaded] = useFonts({
     PlusSemiBold: require("./src/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
     Plusregular: require("./src/assets/fonts/PlusJakartaSans-Regular.ttf"),
     PlusExtraBold: require("./src/assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
     PlusMedium: require("./src/assets/fonts/PlusJakartaSans-Medium.ttf"),
     PlusBold: require("./src/assets/fonts/PlusJakartaSans-Bold.ttf"),
   });

   if (!fontsLoaded) {
     return null;
   }
  return (
   
    <>
      <AppNavigation />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
