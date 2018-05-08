import { createStackNavigator } from "react-navigation";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from "react-navigation-redux-helpers";
import { connect } from "react-redux";
import React from "react";
import MainPage from "./MainPage";
import ChooseColorPage from "./ChooseColorPage";

export const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: MainPage
    },
    ChooseColor: {
      screen: ChooseColorPage,
      navigationOptions: {
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: "Main",
    navigationOptions:{
      title:'RNRX'
    }
  }
);

export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const addListener = createReduxBoundAddListener("root");

class App extends React.Component {
  render() {
   
    return (
      <AppNavigator
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);


export default AppWithNavigationState;   
