//@ts-check

import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signUpUser } from "../actions/index";

function SignUp(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    e.persist();

    setFormData(currentDataForm => {
      return ({
        ...currentDataForm,
        [e.target.name]: e.target.value,
      });
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.dispatch(signUpUser(formData.name, formData.email, formData.password));
  };

  return (
    <div>
      <div className="home-link-container">
        <div className="home-container">
          <Link className="home-link" to="/">Home</Link>
        </div>
          <h1 className="header">cars4you</h1>
      </div>
      <div className="signUp-form">
        <div className="link-text">
          <h1>Sign Up</h1>
        </div>
        <form className="input-form" onSubmit={handleSubmit}>
          <input className="signUp-input" value={formData.name} placeholder="Name" type="text" name="name" onChange={handleChange}></input>
          <input className="signUp-input" value={formData.email} placeholder="Email" type="text" name="email" onChange={handleChange}></input>
          <input className="signUp-input" value={formData.password} placeholder="Password" type="password" name="password" onChange={handleChange}></input>
          <button className="signUp-submit">Submit</button>
        </form>
      </div>
    </div>
  )
};

export default connect()(SignUp)
