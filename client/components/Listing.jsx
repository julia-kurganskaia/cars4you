//@ts-check

import session from "express-session";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { postNewListing, fetchCars } from "../actions/index";

let yearsToChoose = [];

for (let year = 1935; year <= new Date().getFullYear(); year++) {
  yearsToChoose.push(year);
}

let options = [];

for (let i = 1; i <= 7; i++) {
  options.push(i);
}

let locationToChoose = [
  {city: "Auckland", id: 2,},
  {city: "Blenheim", id: 1,},
  {city: "Christchurch", id: 4,},
  {city: "Dunedin", id: 5,},
  {city: "Gisborne", id: 6,},
  {city: "Hamilton", id: 7,},
  {city: "Napier", id: 8,},
  {city: "New Plymouth", id: 9,},
  {city: "Nelson", id: 10,},
  {city: "Rotorua", id: 11,},
  {city: "Taupo", id: 12,},
  {city: "Tauranga", id: 13},
  {city: "Wellington", id: 3,},
  {city: "Whanganui", id: 14,},
  {city: "Other", id: 15,},
];

let modelToChoose = [
  {model: "Audi", id: 4,},
  {model: "BMW", id: 5,},
  {model: "Ford", id: 6,},
  {model: "Holden", id: 3,},
  {model: "Honda", id: 7,},
  {model: "Hyundai", id: 8,},
  {model: "Kia", id: 9,},
  {model: "Lexus", id: 10,},
  {model: "Mazda", id: 11,},
  {model: "Mercedes-Benz", id: 12,},
  {model: "Mitsubishi", id: 1,},
  {model: "Nissan", id: 13,},
  {model: "Peugeot", id: 14,},
  {model: "Renault", id: 15,},
  {model: "Škoda", id: 16,},
  {model: "Subaru", id: 17,},
  {model: "Suzuki", id: 18,},
  {model: "Toyota", id: 2,},
  {model: "Volvo", id: 19,},
  {model: "Other", id: 20},
];

function Listing(props) {
  const [formData, setFormData] = useState({
    location: "",
    model: "",
    colour: "",
    odometer: "",
    engine: "",
    fuel: "",
    transmission: "",
    description: "",
    price: "",
    year: "",
    seats: "",
  });

  const selectLocation = (event) => {
    event.persist();

    setFormData(currentFormData => {
      return ({
        ...currentFormData,
        location: event.target.value,
      });
    });
  };

  const selectModel = (event) => {
    event.persist();

    setFormData(currentFormData => {
      return ({
        ...currentFormData,
        model: event.target.value,
      })
    })
  }

  const selectYear = (event) => {
    event.persist();

    setFormData(currentFormData => {
      return ({
        ...currentFormData,
        year: event.target.value,
      });
    });
  };

  const selectNumberOfSeats = (event) => {
    event.persist();

    setFormData(currentFormData => {
      return ({
        ...currentFormData,
        seats: event.target.value,
      });
    });
  };

  function handleChange(event) {
    event.persist();

    setFormData(currentFormData => {
      return ({
        ...currentFormData,
        [event.target.name]: event.target.value,
      });
    });
  };

  function handleSubmit(event) {
    event.preventDefault();

    props
      .dispatch(postNewListing(Number(formData.location), Number(formData.model), formData.colour, Number(formData.odometer), Number(formData.engine), formData.fuel, formData.transmission, formData.description, Number(formData.price), Number(formData.year), Number(formData.seats)))
      .then(() => {
        props.dispatch(fetchCars());
      })
  };

  return (
    <div>
      <div className="small-header">
        <div className="home-container">
          <Link className="home-link" to="/">Home</Link>
          <Link className="profile-link" to="/profile">Profile</Link>
        </div>
      </div>
      <form className="input-form listing-form" onSubmit={handleSubmit}>
        <div className="location-model-options">
          <select onChange={selectLocation} className="select-options">
            <option value="">Location</option>
              {locationToChoose.map(location => {
                return (
                  <option key={location.id} value={location.id}>{location.city}</option>
                )
              })}
          </select>
          <select onChange={selectModel} className="select-options">
            <option value="">Model</option>
              {modelToChoose.map(model => {
                return (
                  <option key={model.id} value={model.id}>{model.model}</option>
                )
              })}
          </select>
        </div>
        <input className="input" value={formData.colour} placeholder="Colour" name="colour" onChange={handleChange}></input>
        <div className="year-seats-options">
          <select onChange={selectYear} className="select-options">
            <option value="">Year</option>
              {yearsToChoose.map(year => {
                return (
                  <option key={year}>{year}</option>
                )
              })}
          </select>
          <select onChange={selectNumberOfSeats} className="select-options">
            <option value="">Seats</option>
              {options.map(option => {
                return (
                  <option key={option}>{option}</option>
                )
              })}
            <option>8 and more</option>
          </select>
          </div>
            <input className="input" value={formData.odometer} placeholder="Odometer" name="odometer" onChange={handleChange}></input>
            <input className="input" value={formData.engine} placeholder="Engine size" name="engine" onChange={handleChange}></input>
            <input className="input" value={formData.fuel} placeholder="Fuel type" name="fuel" onChange={handleChange}></input>
            <input className="input" value={formData.transmission} placeholder="Transmission" name="transmission" onChange={handleChange}></input>
            <label className="label-description">
              Description
              <textarea value={formData.description} className="input car-description" name="description" onChange={handleChange}></textarea>
            </label>

            <input className="input" value={formData.price} placeholder="Asking price" name="price" onChange={handleChange}></input>
            <button className="listing-button">Publish</button>
        </form>
      </div>
    )
};

export default connect()(Listing)
