import { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import React from "react";
import ListItem from "./ListItem";

const ListCourses = () => {
  const [courses, setCourses] = useState(null);

  const getAllCourses = async () => {
    const res = await axios.get("http://localhost:5002/courses");
    console.log(res.data);
    setCourses(res.data);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <FlatList
      data={courses}
      renderItem={({ item }) => (
        <ListItem txt1={item.title} txt2={item.subtitle} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ListCourses;

const styles = StyleSheet.create({});
