import { View, Text, ScrollView } from "react-native";
import React from "react";
import CoursePrevieComp from "../../../components/mainComponents/CoursePreviewComp";
import { useRoute } from "@react-navigation/native";

const CoursePreviewScreen = () => {
  const { params: { item = {} } = {} } = useRoute();
  console.log(item, "item");
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);

  const courseCategories = ["Details", "Lessions", "Reviews"];
  return (
    <ScrollView>
      <CoursePrevieComp
        courseCategories={courseCategories}
        categoriesIndex={categoriesIndex}
        setCategoriesIndex={setCategoriesIndex}
      />
    </ScrollView>
  );
};

export default CoursePreviewScreen;
