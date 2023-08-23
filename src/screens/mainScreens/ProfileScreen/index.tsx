import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ProfileScreenComp from '../../../components/mainComponents/ProfileScreenComp';

const ProfileScreen = () => {
    const navigation = useNavigation();
  return (
  <ProfileScreenComp />
  )
}

export default ProfileScreen