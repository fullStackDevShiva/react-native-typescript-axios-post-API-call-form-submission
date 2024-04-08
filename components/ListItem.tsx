import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface ItemProp {
  txt1: string;
  txt2: string;
}

const ListItem: React.FC<ItemProp> = ({ txt1, txt2 }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemTxt1}>{txt1}</Text>
      <Text style={styles.itemTxt2}>{txt2}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    marginBottom: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  itemTxt1: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  itemTxt2: {
    fontSize: 16,
  },
});
