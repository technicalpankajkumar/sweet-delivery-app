import React from "react";
// redux implementaion
import { store } from "../redux/store";
import { Provider } from "react-redux";
import AppNavigation from "./navigation";

export default function Index() {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
