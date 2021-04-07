//@ts-check

import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import Cars from "./Cars";
import ContactUs from "./ContactUs";
import Car from "./Car";
import Authentication from "./Authentication";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Cars} />
      <Route path="/auth" component={Authentication} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/car/:id" component={Car} />
    </Router>
  );
};

export default App;
