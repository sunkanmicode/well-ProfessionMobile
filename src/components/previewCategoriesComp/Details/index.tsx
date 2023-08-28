import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { ProfileIcon } from "../../../helper/Icon";
import { Ionicons } from "@expo/vector-icons";


const Details = ({ name }) => {

  const data = [
    {
      icon: <ProfileIcon width={35} />,
      title: "In-depth video lessons (8h 54m)",
    },
    {
      icon: <ProfileIcon width={35} />,
      title: "Step-by-step curriculum",
    },
    {
      icon: <ProfileIcon width={35} />,
      title: "Online and at your own pace",
    },
    {
      icon: <ProfileIcon width={35} />,
      title: "Watch on all devices",
    },
    {
      icon: <ProfileIcon width={35} />,
      title: "Unlimited lifetime access",
    },
  ];
  const dataTwo = [
    {
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      title: "Lorem ipsum dolor sit amet, consectetu",
    },
    {
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      title: "Lorem ipsum dolor sit amet, consectetu",
    },
    {
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      title: "Lorem ipsum dolor sit amet, consectetu",
    },
    {
      icon: <Ionicons name="checkmark-circle" size={11} color="black" />,
      title: "Lorem ipsum dolor sit amet, consectetu",
    },
  ];
  return (
    <View>
      <View>
        <Text className="font-[PlusBold] text-[18px] mb-4">About Course</Text>
        <View>
          <Text className="font-[Plusregular] text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Morbi blandit cursus risus at ultrices mi
            tempus. Ac turpis egestas sed tempus urna et pharetra pharetra massa
          </Text>
          <TouchableOpacity>
            <Text className="text-[#AF5E41] text-[14px] font-[PlusSemiBold]">
              Show More{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text className="text-[14px] font-[Plusregular] text-[#545454]">
          WHAT’S INCLUDED:{" "}
        </Text>
        {data.map((item) => (
          <View className="flex-row mt-2 items-center">
            {item.icon}
            <Text className="text-[13px] font-[PlusSemiBold] leading-[20px]">
              {item.title}
            </Text>
          </View>
        ))}
      </View>
      <View className="mt-5">
        <Text className="text-[18px] font-[PlusBold]">What you’ll learn</Text>
        {dataTwo.map((item) => (
          <View className="flex-row mt-2 items-center">
            {item.icon}
            <Text className="text-[15px] font-[Plusregular] leading-[24px] mx-3">
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Details