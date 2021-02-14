//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../actions";

function Cars (props) {

  useEffect(() => {
    props.dispatch(fetchCars())
  }, [])
  console.log(props.cars)
  return (
      <div>
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <div>
          {props.cars.map(car => (
            <div key={car.id}>{car.location_id}</div>
          ))}
        </div>
      </div>
  )
}

const mapStateToProps = (globalState) => {
    return {
      cars: globalState.cars
    }
  };


  export default connect(mapStateToProps)(Cars)
