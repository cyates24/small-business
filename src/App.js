import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import "./App.css";
import Router from "./Router";
import store from "./redux/store";
import { Switch } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
          <Switch>
            <Nav />
            <Router />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
