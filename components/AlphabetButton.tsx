/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

type AlphabetButtonProps = {
  letter: string;
};

const AlphabetButton: React.FC<AlphabetButtonProps> = ({ letter }) => {
  return (
    <Pressable style={styles.button}>
      <Text>{letter}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(247, 247, 247)",
    borderRadius: 5,
    color: "rgb(51, 51, 51)",
    cursor: "pointer",
    flexBasis: 100,
    fontSize: 14,
    textAlign: "center",
    padding: "10px 15px",
  },
});

export default AlphabetButton;
