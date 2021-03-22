//@ts-check

import React from "react";
import { connect } from "react-redux";
import { togglePrice } from "../actions";

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

    console.log(props.sorting, 'bbb')

    return (
        <div className="sorting">
            {JSON.stringify(props.sorting)}
            <div id="sort-by">Sort by:</div>
            <div className="sorting-by-price">
                <div id="price">Price</div>
                <i onClick={lowestFirstByClick} className="fas fa-angle-down angle"></i>
                <i onClick={highestFirstByClick} className="fas fa-angle-up angle"></i>
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
