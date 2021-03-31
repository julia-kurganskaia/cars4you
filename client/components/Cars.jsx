//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCars } from "../actions";
import { Link } from "react-router-dom";
import Sorting from "./Sorting";
import Filtering from "./Filtering";

function carsSorting(props) {
  if (props.sorting.sortBy === "price") {
    if (props.sorting.priceHighestFirst === true) {
      props.cars.sort((a, b) => {
        return b.price - a.price;
      });
    } else {
      props.cars.sort((a, b) => {
        return a.price - b.price;
      });
    };
  } else if (props.sorting.sortBy === "year") {
    if (props.sorting.oldestYearFirst === false) {
      props.cars.sort((a, b) => {
        return b.year - a.year;
      });
    } else {
      props.cars.sort((a, b) => {
        return a.year - b.year;
      });
    };
  } else if (props.sorting.sortBy === "odometer") {
    if (props.sorting.highOdometerNumber === false) {
      props.cars.sort((a, b) => {
        return a.odometer - b.odometer;
      })
    } else {
      props.cars.sort((a, b) => {
        return b.odometer - a.odometer;
      })
    }
  };
};

function filteringCarsByLocation(filtering, cars) {
  if (filtering.location === "") {
    return cars;
  }

  let filteredCars = cars.filter(car => car.location.toLowerCase() === filtering.location.toLowerCase());
  return filteredCars;
};

function filteringByColour(filtering, cars) {
  if (filtering.colour === "") {
    return cars;
  }

  let filteredByColour = cars.filter(car => car.colour.toLowerCase() === filtering.colour.toLowerCase());
  return filteredByColour;
};

function filteringByMake(filtering, cars) {
  if (filtering.make === "") {
    return cars;
  }

  let filteredByMake = cars.filter(car => car.make_name.toLowerCase() === filtering.make.toLowerCase());
  return filteredByMake;
};

function filteringByFuel(filtering, cars) {
  if (filtering.fuel === "") {
    return cars;
  }

  let filteredByFuel = cars.filter(car => car.fuel.toLowerCase() === filtering.fuel.toLowerCase());
  return filteredByFuel;
}

function Cars(props) {

  useEffect(() => {
    if (props.cars.length === 0) {
      props.dispatch(fetchCars());
    }
  }, []);

  carsSorting(props);

  const filteredByLocationCars = filteringCarsByLocation(props.filtering, props.cars);
  const filteredByColourCars = filteringByColour(props.filtering, filteredByLocationCars);
  const filteredByMakeCars = filteringByMake(props.filtering, filteredByColourCars);
  const filteredByFuelCars = filteringByFuel(props.filtering, filteredByMakeCars);

  return (
    <div>
        <h1 className="header">cars4you</h1>
        <div className="sorting-filtering">
          <Sorting />
          <Filtering />
        </div>
        <div>
          <div className="car-card detail">
          {filteredByFuelCars.map(car => (

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
                  <Link to={"/car/" + car.id}><button>Learn more</button></Link>
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
      cars: globalState.cars,
      sorting: globalState.sorting,
      filtering: globalState.filtering,
    }
};


export default connect(mapStateToProps)(Cars)
