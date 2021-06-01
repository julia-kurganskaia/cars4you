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

function Listing(props) {
    return (
        <div>
            <div className="small-header">
                <div className="home-container">
                    <Link className="home-link" to="/">Home</Link>
                    <Link className="profile-link" to="/profile">Profile</Link>
                </div>
            </div>
            <form className="input-form listing-form">
                <input className="input" placeholder="Location" name="location"></input>
                <input className="input" placeholder="Model" name="model"></input>
                <input className="input" placeholder="Colour" name="colour"></input>
                <div className="year-seats-options">
                  <select className="select-options">
                    <option value="">Year</option>
                    {yearsToChoose.map(year => {
                      return (
                        <option key={year}>{year}</option>
                      )
                    })}
                  </select>
                  <select className="select-options">
                    <option value="">Seats</option>
                    {options.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })}
                    <option>8 and more</option>
                  </select>
                </div>
                <input className="input" placeholder="Odometer" name="odometer"></input>
                <input className="input" placeholder="Engine size" name="engineSize"></input>
                <input className="input" placeholder="Fuel type" name="fuelType"></input>
                <input className="input" placeholder="Transmission" name="transmission"></input>
                <label className="label-description">
                   Description
                  <textarea className="input car-description"></textarea>
                </label>

                <input className="input" placeholder="Asking price" name="price"></input>
                <button className="listing-button">Publish</button>
            </form>
        </div>
    )
}

export default Listing;
