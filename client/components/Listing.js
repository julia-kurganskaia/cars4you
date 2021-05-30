//@ts-check

import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

let yearsToChoose = [];

for (let year = 1935; year <= new Date().getFullYear(); year++) {
  yearsToChoose.push(year);
}

function Listing() {
    return (
        <div>
            <div className="small-header">
                <div className="home-container">
                    <Link className="home-link" to="/">Home</Link>
                    <Link className="profile-link" to="/profile">Profile</Link>
                </div>
            </div>
            <form className="input-form">
                <input placeholder="Location"></input>
                <input placeholder="Model"></input>
                <select>
                  <option value="">Year</option>
                  {yearsToChoose.map(year => {
                    return (
                      <option key={year}>{year}</option>
                    )
                  })}
                </select>
                <input placeholder="Colour"></input>
                <select>
                  <option value="">Seats</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8 and more</option>
                </select>
                <input placeholder="Odometer"></input>
                <input placeholder="Engine size"></input>
                <input placeholder="Odometer"></input>
                <input placeholder="Fuel type"></input>
                <input placeholder="Transmission"></input>
                <input placeholder="Description"></input>
                <input placeholder="Asking price"></input>
                <button>Publish</button>
            </form>
        </div>
    )
}

export default Listing;
