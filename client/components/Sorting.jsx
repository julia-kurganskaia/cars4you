//@ts-check

import React from "react";
import { connect } from "react-redux";
import { lowPriceFirst, highPriceFirst, newCarsFirst, oldCarsFirst, lowOdometerFirst, highOdometerFirst } from "../actions";

function Sorting(props) {

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
                <i onClick={highPriceFirstByClick} className={`icon fas fa-angle-down angle${props.sorting.sortBy === "price" && props.sorting.priceHighestFirst === true ? " active" : ""}`}></i>
                <i onClick={lowPriceFirstByClick} className={`icon fas fa-angle-up angle${props.sorting.sortBy === "price" && props.sorting.priceHighestFirst === false ? " active" : "" }`}></i>
            </div>
            <div className="sorting-by">
                <div id="year">Age</div>
                <i onClick={oldCarsFirstByClick} className={`icon fas fa-angle-down angle${props.sorting.sortBy === "year" && props.sorting.oldestYearFirst === true ? " active" : ""}`}></i>
                <i onClick={newCarsFirstByClick} className={`icon fas fa-angle-up angle${props.sorting.sortBy === "year" && props.sorting.oldestYearFirst === false ? " active" : ""}`}></i>
            </div>
            <div className="sorting-by">
                <div id="odometer">Odometer</div>
                <i onClick={highestOdometerFirstByClick} className={`icon fas fa-angle-down angle${props.sorting.sortBy === "odometer" && props.sorting.highOdometerNumber === true ? " active" : ""}`}></i>
                <i onClick={lowestOdometerFirstByClick} className={`icon fas fa-angle-up angle${props.sorting.sortBy === "odometer" && props.sorting.highOdometerNumber === false ? " active" : ""}`}></i>
            </div>
        </div>
    )
};

const mapStateToProps = (globalState) => {
    return {
      cars: globalState.cars,
      sorting: globalState.sorting,
    }
  };


  export default connect(mapStateToProps)(Sorting)
