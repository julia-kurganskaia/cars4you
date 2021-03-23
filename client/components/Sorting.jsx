//@ts-check

import React from "react";
import { connect } from "react-redux";
import { togglePrice } from "../actions";
import { toggleYear } from "../actions";

function Sorting (props) {

    const lowestFirstByClick = () => {
        if (props.sorting.pricelowestFirst === false) {
            props.dispatch(togglePrice());
        }
    };

    const highestFirstByClick = () => {
        if (props.sorting.pricelowestFirst === true) {
            props.dispatch(togglePrice());
        }
    };

    const oldestFirstByClick = () => {
        if (props.sorting.oldestYearFirst === false) {
            props.dispatch(toggleYear());
        }
    }

    const newestFirstByClick = () => {
        if (props.sorting.oldestYearFirst === true) {
            props.dispatch(toggleYear());
        }
    };

    return (
        <div className="sorting">
            <div id="sort-by">Sort by:</div>
            <div className="sorting-by">
                <div id="price">Price</div>
                <i onClick={lowestFirstByClick} className="fas fa-angle-down angle"></i>
                <i onClick={highestFirstByClick} className="fas fa-angle-up angle"></i>
            </div>
            <div className="sorting-by">
                <div id="year">Year</div>
                <i onClick={newestFirstByClick} className="fas fa-angle-down angle"></i>
                <i onClick={oldestFirstByClick} className="fas fa-angle-up angle"></i>
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
