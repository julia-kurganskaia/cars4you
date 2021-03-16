//@ts-check

import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom"
import { connect } from 'react-redux';

import Cars from "./Cars";
import ContactUs from "./ContactUs";

function App () {
  return (
    <Router>
      <Route exact path="/" component={Cars} />
      <Route path="/contact" component={ContactUs} />
    </Router>
  );
};

const mapStateToProps = (globalState) => {
  return {
    cars: globalState.cars
  };
};

export default connect(mapStateToProps)(App)


