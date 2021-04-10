//@ts-check

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Authentication() {
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
  }
console.log(formData)
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        </div>
          <div className="login-form">
            <h1>Login</h1>
              <form>
                <input className="login-input" placeholder="Email" type="text" name="email" value={formData.email} onChange={handleChange}></input>
                <input className="login-input" placeholder="Password" type="text" name="password" value={formData.password} onChange={handleChange}></input>
                <button className="login-submit">Submit</button>
              </form>
          </div>
      </div>
  )
};

export default Authentication
