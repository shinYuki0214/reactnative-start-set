import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

export function Welcome(props) {
  return <Text style={styles.text}>Hello, {props.name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    fontFamily: Platform.select({
      ios: "Hiragino Mincho ProN",
      android: "serif",
    }),
  },
});
