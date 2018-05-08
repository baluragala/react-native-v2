import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { connect } from "react-redux";

class Counter extends React.Component {
  componentWillMount() {
    this.props.startApp();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="INC" onPress={this.props.inc} />
        <Text style={{fontSize:64}}>{this.props.counter}</Text>
        <Button title="DEC" onPress={this.props.dec} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startApp: () =>
      dispatch({
        type: "START"
      }),
    inc: () => dispatch({ type: "INC" }),
    dec: () => dispatch({ type: "DEC" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  }
});
