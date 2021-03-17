//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../actions";
import { Link } from "react-router-dom";

function Cars(props) {

  useEffect(() => {
    props.dispatch(fetchCars())
  }, []);

  return (
    <div>
        <h1 className="header">cars4you</h1>
        <div>
          <div className="car-card detail">
          {props.cars.map(car => (

            <div className="detail" key={car.id}>
              <div>
                <img className="cars-pic" src={"listings-images/" + car.id.toString() + ".jpg"} />
              </div>
              <div className="card">
                <div className="cars-detail">
                  {car.location}
                </div>
                <div className="cars-detail">
                  {car.name}
                </div>
                <div className="cars-detail">
                  {car.year}
                </div>
                <div className="cars-detail">
                  Colour: {car.colour}
                </div>
                <div className="cars-detail">
                Seats: {car.seats}
                </div>
                <div className="cars-detail">
                  Odometer: {car.odometer}
                </div>
                <div className="cars-detail">
                  <div>
                    Engine details
                  </div>
                <div>
                  {car.engine}, {car.fuel}, {car.transmission}
                </div>
                </div>
                <div className="cars-detail">
                  Asking price: $ {car.price}
                </div>
                <div>
                  <Link to={"/" + car.id}><button>Learn more</button></Link>
                  <Link to="/contact"><button>Contact us</button></Link>
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
