import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Header from "./Header";
import Counter from "./Counter";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Counter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightyellow"
  }
});
