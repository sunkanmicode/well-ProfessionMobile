import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TopRatedComp = () => {
  const navigation = useNavigation();
  return (
    <View className="py-10 px-6 my-5">
      <View className="flex-row justify-between">
        <TouchableOpacity
          className="w-25 h-6 border border-gray-300"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[18px] text-[#090A0A] font-[InterRegular]">
          Top Rated
        </Text>
        <View />
      </View>
      <ScrollView>
        <View className="w-[295px] h-[286px] bg-red-400 mx-auto mt-8">
          <View className="w-[295px] h-[176px]">
            <Image
              source={require("../../../assets/img/top_rate_3.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 10,
                // borderTopRightRadius: 5,
              }}
            />
          </View>
          <View>
            <Text className="font-[PlusBold] text-[14px]">
              Introduction to Petroleum Exploration and Production
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default TopRatedComp