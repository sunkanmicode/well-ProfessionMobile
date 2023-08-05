import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomInput from "../../customComponents/CustomInput";
import CustomButton from "../../customComponents/customButton";
import CountryPicker from "react-native-country-picker-modal";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type RegisterType = {
  onchangeText: (name: string, value: string) => void;
  form: object;
};

const RegisterComp = ({ onchangeText, form }: RegisterType) => {
    const navigation = useNavigation();
  const [value2, onChangeText2] = React.useState("");

  return (
    <View className="py-10 px-6 my-5">
      <View className="flex-row justify-between">
        <TouchableOpacity className="w-25 h-6 border border-gray-300">
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-sm">Sign up</Text>

        <View />
      </View>
      <View className="py-5">
        <CustomInput
          label="Name"
          // value={value}
          onChangeText={(value) =>
            onchangeText({ name: "email", value: value })
          }
          placeholder={"Input your name"}
          // style={styles.input}
          // error={"This Feild is require"}
        />
        <CustomInput
          label="Email"
          // value={value}
          onChangeText={(value) => {
            onchangeText({ name: "email", value: value });
          }}
          placeholder={"Input your email adddres"}
          // style={styles.input}
          // error={"This Feild is require"}
        />
        <CustomInput
          label="Phone number"
          placeholder={"Input your email adddres"}
          icon={
            <CountryPicker
              //  countryCode
              withFilter
              withFlag
              withCountryNameButton={false}
              withCallingCode
              withEmoji
              onSelect={() => {}}
            />
          }
          onChangeText={(value) => {
            onchangeText({ name: "phoneNumber", value });
          }}
          iconPostion="left"
        />
        <CustomInput
          label="Create password"
          // value={value2}
          // secureTextEntry
          onchangeText={(text) => onChangeText2(text)}
          placeholder={"Create your password"}
          icon={<FontAwesome5 name="eye" size={24} color="black" />}
          iconPostion="right"
          // style={styles.input}
        />

        <View className="pt-10 pb-5">
          <View className="flex-row items-center justify-evenly">
            <View className="h-0.5 w-20 bg-slate-400" />
            <Text>OR</Text>
            <View className="h-0.5 w-20 bg-slate-400" />
          </View>
          <View className="flex-row items-center justify-evenly mt-2">
            <TouchableOpacity className="w-24 h-11 border  border-gray-300 items-center justify-center rounded-md">
              <FontAwesome5 name="google" size={24} color="#34A853" />
            </TouchableOpacity>
            <TouchableOpacity className="w-24 h-11 border  border-gray-300 items-center justify-center rounded-md bg-[#1877F2]">
              <FontAwesome5 name="facebook" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text className="pt-4 text-xs">
            By continuing, you agree to our
            <Text
              onPress={() => {
                console.log("clicked");
              }}
              className="text-[#CD760F]"
            >
              {" "}
              Terms of Service{" "}
            </Text>{" "}
            and
            <Text className="text-[#CD760F]"> Privacy Policy.</Text>
          </Text>
        </View>

        <CustomButton
          primary
          title="Register"
          loading={false}
          disabled={false}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
    </View>
  );
};

export default RegisterComp;
