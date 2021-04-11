//@ts-check

import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/index";

function Authentication(props) {
  const [formData, setFormData] = useState({
      email: "",
      password: "",
  })

  function handleChange(e) {
    e.persist();

    setFormData(currentFormData => {
      return ({
        ...currentFormData,
        [e.target.name]: e.target.value,
      });
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.dispatch(loginUser(formData.email, formData.password));
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input className="login-input" placeholder="Email" type="text" name="email" value={formData.email} onChange={handleChange}></input>
            <input className="login-input" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange}></input>
            <button className="login-submit">Submit</button>
        </form>
      </div>
    </div>
  )
};

export default connect()(Authentication)
