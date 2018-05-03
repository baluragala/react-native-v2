import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Header from "./Header";
import Counter from "./CounterWithProps";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Counter initialValue={100} incValue={10} decValue={10}/>
        <Counter initialValue={5000} incValue={10} decValue={10}/>
        <Counter initialValue={15} incValue={.5} decValue={.25}/>
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
