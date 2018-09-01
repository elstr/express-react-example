import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 1) Importar
import { createStore, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./state/index";

// 2) Conecto las devtools
const middlewares = [];

if (window.devToolsExtension) {
  middlewares.push(window.devToolsExtension());
}

// 3) Defino mi store y permito que las devtools "ver" las acciones despachadas y lo que hago
const store = createStore(rootReducer, compose(...middlewares));

// 4) Renderizo APP pero wrappeado en mi Provider así todos sus child components pueden conectarse al store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
