//@ts-check

import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

let yearsToChoose = [];

for (let year = 1935; year <= new Date().getFullYear(); year++) {
  yearsToChoose.push(year);
}

let options = [];

for (let i = 1; i <= 7; i++) {
  options.push(i);
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
                  {options.map(option => {
                    return (
                      <option>{option}</option>
                    )
                  })}
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
