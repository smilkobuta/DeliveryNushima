/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

type AddressCardProps = {
  name: string;
  address: string;
  phone: string;
};

const AddressCard: React.FC<AddressCardProps> = ({ name, address, phone }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.details}>{address}</Text>
      <Text style={styles.details}>{phone}</Text>
      <Pressable
        onPress={() => console.log("荷物 added")}
        style={styles.addButton}
      >
        <Text style={styles.buttonText}>＋荷物</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgb(221, 221, 221)",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
    padding: "15px 20px",
  },
  name: {
    color: "rgb(51, 51, 51)",
    fontSize: 18,
    marginBottom: 10,
  },
  details: {
    color: "rgb(102, 102, 102)",
    fontSize: 14,
    marginBottom: 5,
  },
  addButton: {
    alignSelf: "flex-end",
    backgroundColor: "rgb(51, 51, 51)",
    borderRadius: 5,
    padding: "10px 15px",
  },
  buttonText: {
    color: "rgb(255, 255, 255)",
    fontSize: 14,
    textAlign: "center",
  },
});

export default AddressCard;
