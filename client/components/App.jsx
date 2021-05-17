//@ts-check

import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import history from "../utils/history";

import Cars from "./Cars";
import ContactUs from "./ContactUs";
import Car from "./Car";
import Authentication from "./Authentication";
import Profile from "./Profile";
import SignUp from "./SignUp";

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Cars} />
      <Route path="/auth" component={Authentication} />
      <Route path="/profile" component={Profile} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/car/:id" component={Car} />
      <Route path="/registration" component={SignUp} />
    </Router>
  );
};

export default App;
