import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

import Counter from "./Counter";

const reducer = (prevState = { counter: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return { counter: prevState.counter + 1 };
    case "DEC":
      return { counter: prevState.counter - 1 };
    default:
      return prevState;
  }
};

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
