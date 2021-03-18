import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

//@ts-check

function Car (props) {
    const carId = props.match.params.id;
    const data = props.cars;

    for (let i = 0; i < data.length; i++) {
        if (data[i].id.toString() === carId) {
            const displayingCar = data[i];

            return (
                <div className="oneCar">
                    <Link to="/">Home</Link>
                    <div>
                        <img src={"listings-images/" + displayingCar.id.toString() + ".jpg"} />
                    </div>
                    <div>
                        <div className="cars-detail">
                            {displayingCar.location}
                        </div>
                        <div className="cars-detail">
                            {displayingCar.name}
                        </div>
                        <div className="cars-detail">
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
                        <div className="cars-detail">
                            Asking price: $ {displayingCar.price}
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <Link to="/">Home</Link>
            <div>Sorry, no car was found.</div>
        </div>
    )

}

const mapStateToProps = (globalState) => {
    return {
      cars: globalState.cars
    }
 };


export default connect(mapStateToProps)(Car)
