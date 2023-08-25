import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";


const ViewProfileComp = () => {
    const navigation = useNavigation();
  return (
    <View className="py-10 px-6 my-5">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity
          className="w-25 h-6 border border-gray-300"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View />

        <TouchableOpacity>
          <Ionicons name="md-settings-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ViewProfileComp