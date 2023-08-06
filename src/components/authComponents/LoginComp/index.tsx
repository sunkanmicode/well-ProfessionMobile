import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomInput from '../../customComponents/CustomInput';
import CustomButton from '../../customComponents/customButton';
import Checkbox from "expo-checkbox";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

type LoginType = {
  onchangeText:(name:string, value:string) =>void
  form:object
};

const LoginComp = ({ onchangeText, form }: LoginType) => {
      const navigation = useNavigation();
  // const [value, ] = React.useState("");
  const [value2, onChangeText2] = React.useState("");
   const [isChecked, setChecked] = React.useState(false);

  return (
    <View className="py-10 px-6 my-5">
      <View className="flex-row justify-between">
        <TouchableOpacity className="w-25 h-6 border border-gray-300">
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg">Log in</Text>
        <View />
      </View>
      <View className="py-8">
        <View className="mb-10">
          <Text className="text-2xl font-bold">Welcome back,</Text>
          <Text className="text-[#6C7072] text-xs">Good to see you again.</Text>
        </View>
        <CustomInput
          label="Email Address"
          // value={value}
          onChangeText={(value) => {
            onchangeText({ name: "email", value: value });
          }}
          placeholder={"Input your email adddres"}
          // style={styles.input}
          // error={"This Feild is require"}
        />

        <CustomInput
          label="Create password"
          // value={value2}
          // secureTextEntry
          onchangeText={(text) => onChangeText2(text)}
          placeholder={"Create your password"}
          icon={<FontAwesome5 name="eye" size={18} color="black" />}
          iconPostion="right"
          // style={styles.input}
        />
        <View className="flex-row items-center justify-between">
          <View className="flex-row">
            <Checkbox
              className="border"
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#CD760F" : "#CD760F"}
            />
            <Text className="mx-2 text-[#CD760F] text-sm">Remember me</Text>
          </View>
          <TouchableOpacity onPress={()=>{
            navigation.navigate("ForgotPassword")
          }}>
            <Text className="text-[#CD760F] text-sm">Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View className="pt-10  mb-20">
          <View className="flex-row items-center mx-auto">
            <View className="h-0.5 w-20 bg-slate-400" />
            <Text className="mx-3">OR</Text>
            <View className="h-0.5 w-20 bg-slate-400" />
          </View>
          <View className="mt-2">
            <TouchableOpacity className=" flex-row w-full h-11 border border-gray-300  items-center justify-center rounded-lg my-3">
              <FontAwesome5 name="google" size={24} color="#34A853" />
              <Text className="mx-3 text-base text-[#344054]">
                Sign in with Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row w-full h-11 border  border-gray-300 items-center justify-center rounded-lg bg-[#1877F2]">
              <FontAwesome5 name="facebook" size={24} color="#fff" />
              <Text className="mx-3 text-base text-white">
                Sign in with Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton primary title="Login" loading={false} disabled={false} />
      </View>
    </View>
  );
};

export default LoginComp