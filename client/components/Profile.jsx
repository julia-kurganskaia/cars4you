//@ts-check

import React from "react";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <div>
            <div className="small-header">
                <div className="home-container">
                    <Link className="home-link" to="/">Home</Link>
                </div>
            </div>
        </div>
    )
};

export default Profile
