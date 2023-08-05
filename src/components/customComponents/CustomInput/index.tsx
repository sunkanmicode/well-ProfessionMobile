import React from "react";
import { View, Text, TextInput } from "react-native";


type InputType = {
  onChangeText: (text: string) => void;
  icon?: JSX.Element;
  value?: string;
  style?: string;
  label?: string;
  iconPostion?: string;
  placeholder?: string;
  error?: string;
};

const CustomInput = ({
  onChangeText,
  icon,
  value,
  style,
  label,
  iconPostion,
  placeholder,
  error,
}: InputType) => {
  const [focused, setFocused] = React.useState<boolean>(false);

   

  const fontFamily = "font-Plus-regular";

  const getBorderColor = () => {
    if (focused) return "border-blue-500";
    if (error) {
      return "border-red-700";
    }
  };

  const getFlexDirection = () => {
    if (!icon && !iconPostion) {
      return "flex-row";
    }
    if (icon && iconPostion) {
      if (iconPostion === "left") {
        return "flex-row";
      } else {
        if (iconPostion === "right") {
          return "flex-row-reverse";
        }
      }
    }
  };

  return (
    <View className="py-3">
      {label && <Text className="text-[#2C3131] text-base">{label}</Text>}
      <View
        className={`px-2 h-14 border border-gray-300 rounded-md items-center mt-2 ${getFlexDirection()} ${getBorderColor()}`}
      >
        <View>{icon && icon}</View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          className="flex-1 h-11 px-2"
          // style={style}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </View>
      {error && <Text className="text-red-700 text-xs pt-2">{error}</Text>}
    </View>
  );
};

export default CustomInput;
