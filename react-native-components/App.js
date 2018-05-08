import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView maximumZoomScale={5}>
          <Text>Open up App.js to start working on your app!</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
