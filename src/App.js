import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import "./App.css";
import Router from "./Router";
import store from "./redux/store";


class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Nav />
            <Router />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
