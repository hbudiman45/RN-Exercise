import React from "react";
import { Modal, View, Text, Button, StyleSheet, Image } from "react-native";

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.listImage} source={props.selectedPlace.image} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <Button title="Deleted" color="red" onPress={props.onItemDeleted} />
        <Button title="Close" color="blue" onPress={props.onModalClosed} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  listImage: {
    marginRight: 8,
    width: "100%",
    height: "60%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 25
  }
});

export default PlaceDetail;
