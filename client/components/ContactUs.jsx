import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <div>
            <Link to="/">Home</Link>
            <div>Would you like to find out more and want to talk to someone? Contact us by clicking on one of the boxes below to let us know if you have any questions.
                <div>
                    <div>Call us</div>
                    <div>Email us</div>
                    <div>Visit us</div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs
