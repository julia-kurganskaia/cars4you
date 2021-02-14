//@ts-check

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Cars from "./Cars";

function App () {
  return (
    <div className="app">
      <Cars />
    </div>
  );
};

const mapStateToProps = (globalState) => {
  return {
    cars: globalState.cars
  };
};

export default connect(mapStateToProps)(App)


