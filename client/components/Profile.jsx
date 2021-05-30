//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../actions";

function Profile(props) {
    useEffect(() => {
        props.dispatch(getUserProfile())
    }, []);

    return (
        <div>
            <div className="small-header">
                <div className="home-container">
                    <Link className="home-link" to="/">Home</Link>
                </div>
            </div>
            <div id="profile-info-container">
                <div className="info-container">
                    <div className="container bold-text">Name</div>
                    <div className="container">{props.profile.user_name}</div>
                </div>
                <div className="info-container">
                    <div className="container bold-text">Email</div>
                    <div className="container">{props.profile.email}</div>
                </div>
            </div>
            <Link to="/listing"><button className="listing-button">Add listing</button></Link>
        </div>
    )
};

const mapStateToProps = (globalState) => {
    return {
        profile: globalState.profile,
    }
}

export default connect(mapStateToProps)(Profile)
