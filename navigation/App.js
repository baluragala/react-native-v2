import { createStackNavigator } from "react-navigation";
import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";
import { Provider, connect } from "react-redux";
import React from "react";
import MainPage from "./src/components/MainPage";
import ChooseColorPage from "./src/components/ChooseColorPage";
import ColorReducer from "./src/reducers/ColorReducer";
import logger from "redux-logger";

import AppWithNavigationState,{middleware} from "./src/components/AppNavigator"
import appReducer from "./src/reducers/AppReducer";



const store = createStore(appReducer, applyMiddleware(middleware,logger));

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
