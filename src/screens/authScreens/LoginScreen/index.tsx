import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import LoginComp from '../../../components/authComponents/LoginComp';

const LoginScreen = () => {
  const [form, setForm] = React.useState<object>({})

  const onchangeText = (name:string, value:string)=>{
    setForm({...form, [name]:value})
  }
 

  return <LoginComp onchangeText={onchangeText} form={form} />;
}


export default LoginScreen