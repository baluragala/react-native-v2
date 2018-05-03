import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: this.props.initialValue };
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }
  inc() {
    this.setState({ counter: this.state.counter + this.props.incValue });
  }

  dec() {
    this.setState({ counter: this.state.counter - this.props.decValue  });
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
    flex:1,
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
