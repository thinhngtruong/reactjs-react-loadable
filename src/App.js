import React from "react";
import { Link, Router } from "@reach/router";
import Loadable from "react-loadable";

import "./App.css";

const LoadableAbout = Loadable({
  loader: () => import("./About"),
  loading() {
    return <h1>Loading split out code...</h1>;
  },
});

function App() {
  return (
    <React.Fragment>
      <Link to="about">About Us</Link>
      <Router>
        <LoadableAbout path="about" />
      </Router>
    </React.Fragment>
  );
}

export default App;
