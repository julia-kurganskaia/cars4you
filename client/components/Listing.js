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
            <form className="input-form listing-form">
                <input className="input" placeholder="Location"></input>
                <input className="input" placeholder="Model"></input>
                <input className="input" placeholder="Colour"></input>
                <div>
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
                <input className="input" placeholder="Odometer"></input>
                <input className="input" placeholder="Engine size"></input>
                <input className="input" placeholder="Fuel type"></input>
                <input className="input" placeholder="Transmission"></input>
                <label className="label-description">Description</label>
                <textarea className="input car-description"></textarea>
                <input className="input" placeholder="Asking price"></input>
                <button className="listing-button">Publish</button>
            </form>
        </div>
    )
}

export default Listing;
