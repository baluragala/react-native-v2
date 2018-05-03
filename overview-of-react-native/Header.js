import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

const Header = _ => (
  <View style={styles.header}>
    <Text style={styles.title}>Counter App</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  header: {
    margin: 20
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    color: "purple"
  }
});
