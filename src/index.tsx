import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/HomePage";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import store from "./api/reducers/combineReducer";
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
