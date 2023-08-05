import React from 'react'
import RegisterComp from '../../../components/authComponents/RegisterComp'
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
    const navigation = useNavigation();
   const [form, setForm] = React.useState<object>({});

   const onchangeText = (name: string, value: string) => {
     setForm({ ...form, [name]: value });
   };
 
  return (
    <RegisterComp
      onchangeText={onchangeText}
      form={form}
      navigation={navigation}
    />
  );
}

export default RegisterScreen