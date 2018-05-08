import { combineReducers } from "redux";
import ColorReducer from "./ColorReducer";
import { AppNavigator } from "../components/AppNavigator";
import { createNavigationReducer } from "react-navigation-redux-helpers";

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
  color: ColorReducer,
  nav: navReducer
});

export default appReducer;
