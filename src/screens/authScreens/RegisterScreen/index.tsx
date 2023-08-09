import React from "react";
import RegisterComp from "../../../components/authComponents/RegisterComp";


const RegisterScreen = () => {
  const [form, setForm] = React.useState<{[key: string]: any}>({});

  const onchangeText = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = ()=>{
    console.log(form, "form")
  }

  return (
    <RegisterComp onchangeText={onchangeText} onSubmit={onSubmit} form={form} />
  );
};

export default RegisterScreen;
