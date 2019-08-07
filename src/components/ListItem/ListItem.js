import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image source={props.placeImage} style={styles.listImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  listImage: {
    marginRight: 8,
    width: 30,
    height: 30
  }
});

export default listItem;
