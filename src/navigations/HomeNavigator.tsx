import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/mainScreens/HomeScreen';
import TopRatedScreen from '../screens/mainScreens/TopRatedScreen';
import { CartIcon, FeaturedIcon, HomeIcon, ProfileIcon, SearchIcon } from '../helper/Icon';



const Tab = createBottomTabNavigator();

function DummyScreen() {
  return <View className='flex-1 items-center justify-center bg-green-500'>
    <Text>Am a Dummy Screen</Text>
  </View>;
}


const HomeNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          header: () => null,
          // tabBarIcon: ({ focused, size, color }) => {
          //    let iconName;
          //    if (route.name === "Home") {
          //      iconName = <HomeIcon />;
          //      size = focused ? 20 : 18;
          //      color = focused ? "#AF5E41" : "#0000";
          //    } else if (route.name === "Featured") {
          //      iconName = <FeaturedIcon />;
          //      size = focused ? 20 : 18;
          //      color = focused ? "#AF5E41" : "#0000";
          //    } else if (route.name === "Search") {
          //      iconName = <SearchIcon />;
          //      size = focused ? 20 : 18;
          //      color = focused ? "#AF5E41" : "#0000";
          //    } else if (route.name === "Cart") {
          //      iconName = <CartIcon />;
          //      size = focused ? 20 : 18;
          //      color = focused ? "#AF5E41" : "#0000";
          //    } else if (route.name === "User") {
          //      iconName = <ProfileIcon />;
          //      size = focused ? 20 : 18;
          //      color = focused ? "#AF5E41" : "#0000";
          //    }
          //     return (
          //       <Icon type={type} name={iconName} size={size} color={color} />
          //     );
          // },
          tabBarActiveTintColor: "#AF5E41",
          // tabBarInactiveTintColor: "gray",
          tabBarActiveBackgroundColor: "rgba(175, 94, 65, 0.2)",
          // tabBarLabelPosition: "beside-icon",
          
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <HomeIcon size={size} color={color} />
              // tabBarShowLabel: false,
            ),
            
          }}
        />
        <Tab.Screen
          name="Featured"
          component={DummyScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <FeaturedIcon size={size} color={focused ? "#AF5E41" : color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={DummyScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <SearchIcon size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={DummyScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <CartIcon size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={DummyScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <ProfileIcon size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default HomeNavigator