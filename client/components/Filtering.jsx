//@ts-check

import React from "react";
import { connect } from "react-redux";
import { filterByLocation, filterByColour, filterByMakeCompany, filterByFuel } from "../actions";

function Filtering(props) {

  const filteringByLocation = (event) => {
    let option = event.target.value;
    props.dispatch(filterByLocation(option));
  };

  const filteringByColour = (event) => {
    let colour = event.target.value;
    props.dispatch(filterByColour(colour));
  };

  const filteringByMakeCompany = (event) => {
    let make = event.target.value;
    props.dispatch(filterByMakeCompany(make));
  };

  const filteringByFuel = (event) => {
    let fuel = event.target.value;
    props.dispatch(filterByFuel(fuel));
  };

  return (
    <div className="filtering">
      <label className="filter-text">Filter by</label>
        <select className="filter-window" onChange={filteringByLocation}>
          <option className="filter-option" value="">--Location--</option>
          <option value="wellington">Wellington</option>
          <option value="blenheim">Blenheim</option>
          <option value="auckland">Auckland</option>
        </select>

        <select className="filter-window" onChange={filteringByColour}>
          <option className="filter-option" value="">--Colour--</option>
          <option value="grey">Grey</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>

        <select className="filter-window" onChange={filteringByMakeCompany}>
          <option className="filter-option" value="">--Make--</option>
          <option value="mitsubishi">Mitsubishi</option>
          <option value="toyota">Toyota</option>
          <option value="holden">Holden</option>
        </select>

        <select className="filter-window" onChange={filteringByFuel}>
          <option className="filter-option" value="">--Fuel--</option>
          <option value="petrol">Petrol</option>
          <option value="hybrid">Hybrid</option>
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
