import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SignUp() {
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
              <form className="input-form">
                  <input className="signUp-input" placeholder="Name" type="text" name="name"></input>
                  <input className="signUp-input" placeholder="Email" type="text" name="email"></input>
                  <input className="signUp-input" placeholder="Password" type="password" name="password"></input>
                  <button className="signUp-submit">Submit</button>
              </form>
      </div>
        </div>
    )
}

export default connect()(SignUp)
