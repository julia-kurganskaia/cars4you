//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../actions";

function Cars(props) {

  useEffect(() => {
    props.dispatch(fetchCars())
  }, []);

  return (
    <div>
        <h1>Nice cars for you!!!</h1>
        <div>
          <div className="car-card detail">
          {props.cars.map(car => (

            <div className="detail" key={car.id}>
              <div>
                <img src={"listings-images/" + car.id.toString() + ".jpg"} />
              </div>
              <div>
              <div>
                {car.location}
              </div>
              <div>
                {car.name}
              </div>
              <div>
                {car.year}
              </div>
              <div className="detail">
                <div>
                  Colour: {car.colour}
                </div>
                <div>
                  Seats: {car.seats}
                </div>
              </div>
              <div>
                Odometer: {car.odometer}
              </div>
              <div>
                <div>
                  Engine details
                </div>
                <div>
                  {car.engine} {car.fuel} {car.transmission}
                </div>
              </div>
              <div>
                Asking price: ${car.price}
              </div>
            </div>

            </div>
          ))}
        </div>
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
