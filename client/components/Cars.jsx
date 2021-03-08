//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../actions";

function Cars(props) {

  useEffect(() => {
    props.dispatch(fetchCars())
  }, [])
  console.log(props.cars)
  return (
      <div>
        <h1>Nice cars for you!!!</h1>
        <div>
          {props.cars.map(car => (
            <div key={car.id}>
              <div>
                Model: {car.name}
              </div>
              <div>
                Location: {car.location}
              </div>
              <div>
                Odometer: {car.odometer}
              </div>
              <div>
                Engine: {car.engine}
              </div>
              <div>
                Fuel: {car.fuel}
              </div>
            </div>
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
