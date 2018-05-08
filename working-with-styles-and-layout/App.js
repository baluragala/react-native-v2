import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import FlexDirection from "./FlexDirection";
import Flex from "./Flex";
import JustifyContent from "./JustifyContent";
import AlignItems from "./AlignItems";
import AlignSelf from "./AlignSelf";
import FlexWrap from "./FlexWrap";
import AlignContent from "./AlignContent";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlexWrap/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "black"
  }
});
