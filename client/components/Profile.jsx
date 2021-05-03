//@ts-check

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from "../actions";

function Profile(props) {
    useEffect(() => {
        console.log(props)
        props.dispatch(getUserProfile())
    }, []);

    return (
        <div>
            <div className="small-header">
                <div className="home-container">
                    <Link className="home-link" to="/">Home</Link>
                </div>
            </div>
            <div>
                <div>Your name: {props.profile.user_name}</div>
                <div>Your email: {props.profile.email}</div>
            </div>

        </div>
    )
};

const mapStateToProps = (globalState) => {
    return {
        profile: globalState.profile,
    }
}

export default connect(mapStateToProps)(Profile)
