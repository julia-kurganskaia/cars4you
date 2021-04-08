//@ts-check

import React from "react";
import { Link } from "react-router-dom";

function Authentication() {
       return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div className="login-form">
                <h1>Login</h1>
                <form>
                    <input className="login-input" placeholder="Email" type="text"></input>
                    <input className="login-input" placeholder="Password" type="text"></input>
                    <button className="login-submit">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Authentication
