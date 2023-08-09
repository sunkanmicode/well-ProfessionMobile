import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import LoginComp from "../../../components/authComponents/LoginComp";

const LoginScreen = () => {
  const [form, setForm] = React.useState<{ [key: string]: string }>({});
  const [isChecked, setChecked] = React.useState<boolean>(false);

  const onchangeText = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <LoginComp
      isChecked={isChecked}
      setChecked={setChecked}
      onchangeText={onchangeText}
      form={form}
    />
  );
};

export default LoginScreen;
