import React from "react";
import RegisterComp from "../../../components/authComponents/RegisterComp";
import { registerUser } from "../../../helper/api";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "react-query";
import { useNavigation } from "@react-navigation/native";
import toast from "../../../helper/toast";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const [isSecureEntry,setIsSecureEntry] = React.useState(false)
  const [form, setForm] = React.useState<{ [key: string]: any }>({});

  const onchangeText = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  //MUTATION HANDLER
  const { mutate,data, error, isError, isLoading } = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
       toast.success({ message: data.message });
       navigation.navigate("Login");
      // console.log(data, "data-onSccess");
    },
    onError: (error) => {
      console.log(error)
       toast.danger({
         message: error.response.data.message || error.response.data.msg,
       });
    },
  });
       console.log({ data, error, isError, isLoading }, "mutate");


  const onSubmit = () => {
    mutate(form);
  };

  return (
    <RegisterComp
      onchangeText={onchangeText}
      onSubmit={onSubmit}
      form={form}
      setForm={setForm}
      isLoading={isLoading}
      isSecureEntry={isSecureEntry}
      setIsSecureEntry={setIsSecureEntry}
    />
  );
};

export default RegisterScreen;
