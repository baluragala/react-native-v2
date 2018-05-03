import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }
  inc() {
    this.setState({ counter: this.state.counter + 1 });
  }

  dec() {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.actions} onPress={this.inc}>
          INC
        </Text>
        <Text style={[styles.actions, styles.counter]}>
          {this.state.counter}
        </Text>
        <Text style={styles.actions} onPress={this.dec}>
          DEC
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  actions: {
    fontSize: 48
  },
  counter: {
    color: "blue"
  }
});

export default Counter;
