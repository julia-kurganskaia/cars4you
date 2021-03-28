//@ts-check

import React from "react";
import { connect } from "react-redux";
import { filterByLocation } from "../actions";

function Filtering(props) {

  const filteringByLocation = (event) => {
    let option = event.target.value;
    props.dispatch(filterByLocation(option));
  }

  return (
    <div>
      <label>Filter by:</label>
        <select onChange={filteringByLocation}>
          <option value="">--Location--</option>
          <option value="wellington">Wellington</option>
          <option value="blenheim">Blenheim</option>
          <option value="auckland">Auckland</option>
        </select>
    </div>
  )
};

const mapStateToProps = (globalState) => {
    return {
      cars: globalState.cars,
      filtering: globalState.filtering,
    }
};


export default connect(mapStateToProps)(Filtering)
