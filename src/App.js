import React from "react";
import "./App.css";
import LandingPage from "./pages/landingPage";
import { Provider } from "react-redux";
import store from "../src/store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
