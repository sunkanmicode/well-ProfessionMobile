import { View, Text, ScrollView } from "react-native";
import React from 'react'
import TrendingComp from '../../../components/mainComponents/TrendingComp'

const TrendingScreen = () => {
  return (
    <ScrollView>
      <TrendingComp />
    </ScrollView>
  ); 
}

export default TrendingScreen