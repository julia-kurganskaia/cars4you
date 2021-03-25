//@ts-check

import React from "react";
import { connect } from "react-redux";
import { lowPriceFirst, highPriceFirst, newCarsFirst, oldCarsFirst, lowOdometerFirst, highOdometerFirst } from "../actions";

function Sorting (props) {

    const highPriceFirstByClick = () => {
        props.dispatch(highPriceFirst());
    };

    const lowPriceFirstByClick = () => {
        props.dispatch(lowPriceFirst());
    };

    const oldCarsFirstByClick = () => {
        props.dispatch(oldCarsFirst());
    };

    const newCarsFirstByClick = () => {
        props.dispatch(newCarsFirst());
    };

    const highestOdometerFirstByClick = () => {
        props.dispatch(highOdometerFirst());
    };

    const lowestOdometerFirstByClick = () => {
        props.dispatch(lowOdometerFirst());
    };

    return (
        <div className="sorting">
            <div id="sort-by">Sort by:</div>
            <div className="sorting-by">
                <div id="price">Price</div>
                <i onClick={highPriceFirstByClick} className="fas fa-angle-down angle"></i>
                <i onClick={lowPriceFirstByClick} className="fas fa-angle-up angle"></i>
            </div>
            <div className="sorting-by">
                <div id="year">Age</div>
                <i onClick={oldCarsFirstByClick} className="fas fa-angle-down angle"></i>
                <i onClick={newCarsFirstByClick} className="fas fa-angle-up angle"></i>
            </div>
            <div className="sorting-by">
                <div id="price">Odometer</div>
                <i onClick={highestOdometerFirstByClick} className="fas fa-angle-down angle"></i>
                <i onClick={lowestOdometerFirstByClick} className="fas fa-angle-up angle"></i>
            </div>
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
      cars: globalState.cars,
      sorting: globalState.sorting,
    }
  };


  export default connect(mapStateToProps)(Sorting)
