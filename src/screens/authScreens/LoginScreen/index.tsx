import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import LoginComp from "../../../components/authComponents/LoginComp";
import { useNavigation } from "@react-navigation/native";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
import { loginUser } from "../../../helper/api";
import toast from "../../../helper/toast";
import useAuthStore from "../../../stores";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { setRequestIsLogged, setAuthUser } = useAuthStore(
    (state) => state
  );
   const [isSecureEntry, setIsSecureEntry] = React.useState(false);
  const [form, setForm] = React.useState<{ [key: string]: string }>({});
  const [isChecked, setChecked] = React.useState<boolean>(false);

console.log(authUser, "authUser");
  const onchangeText = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  //MUTATION HANDLER
  const { mutate, data, error, isError, isLoading, isSuccess } = useMutation(
    ["login"],
    {
      mutationFn: loginUser,
    
      onSuccess: (data) => {
        setRequestIsLogged(true);
        // toast.success({ message: data.message });
        // navigation.navigate("Login");
        setAuthUser(data)
        console.log(data, "data-onSccess");
      },
      onError: (error) => {
        console.log(error);
        toast.danger({
          message: error.response.data.message || error.response.data.msg,
        });
      },
    }
  );
  console.log({ data, error, isError, isLoading, isSuccess }, "mutate");

  const onSubmit = () => {
    console.log(form)
    mutate(form);
  };

  return (
    <LoginComp
      isChecked={isChecked}
      setChecked={setChecked}
      onchangeText={onchangeText}
      form={form}
      onSubmit={onSubmit}
      isSecureEntry={isSecureEntry} 
      setIsSecureEntry={setIsSecureEntry}
    />
  );
};

export default LoginScreen;
