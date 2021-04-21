//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCars } from "../actions";

function Car(props) {
    useEffect(() => {
        props.dispatch(fetchCars());
    }, []);

    const carId = Number(props.match.params.id);
    const data = props.cars;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === carId) {
            const displayingCar = data[i];

            return (
                <div>
                    <div id="car-header">
                        <div className="home-container">
                            <Link className="home-link" to="/">Home</Link>
                        </div>
                        <h1 className="header">cars4you</h1>
                    </div>
                    <div className="one-car">
                        <div className="content">
                            <img className="car-pic" src={"listings-images/" + displayingCar.id.toString() + ".jpg"} />
                        </div>
                        <div className="content">
                            <div className="cars-detail bold-text">
                                {displayingCar.location}
                            </div>
                            <div className="cars-detail bold-text">
                                {displayingCar.name}
                            </div>
                            <div className="cars-detail bold-text">
                                {displayingCar.year}
                            </div>
                            <div className="cars-detail">
                                Colour: {displayingCar.colour}
                            </div>
                            <div className="cars-detail">
                                Seats: {displayingCar.seats}
                            </div>
                            <div className="cars-detail">
                                Odometer: {displayingCar.odometer}
                            </div>
                            <div className="cars-detail">
                                <div>Engine details</div>
                                <div>
                                    {displayingCar.engine}, {displayingCar.fuel}, {displayingCar.transmission}
                                </div>
                            </div>
                            <div className="cars-detail">
                                {displayingCar.about}
                            </div>
                            <div className="cars-detail bold-text price">
                                Asking price: ${displayingCar.price}
                            </div>
                            <Link to="/contact"><button className="contact-link">Contact us</button></Link>
                        </div>
                    </div>
                </div>
            )
        };
    };
    return (
        <div>
            <Link to="/">Home</Link>
            <div>Sorry, no car was found.</div>
        </div>
    );
};

const mapStateToProps = (globalState) => {
    return {
      cars: globalState.cars
    }
};


export default connect(mapStateToProps)(Car)
