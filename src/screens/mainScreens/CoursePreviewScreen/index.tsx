import { View, Text } from 'react-native'
import React from 'react'
// import CoursePrevieComp from '../../../components/mainComponents/CoursePreviewComp'
import { useRoute } from '@react-navigation/native';

const CoursePreviewScreen = () => {
  const { params: { item = {} } = {} } = useRoute();
  console.log(item, "item");
  return (
  // <CoursePrevieComp />
  <View>
    <Text>Hellods</Text>
  </View>
  
  )
}

export default CoursePreviewScreen