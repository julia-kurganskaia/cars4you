import React from "react";
import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <div>
            <div className="small-header">
                <div className="home-container">
                    <Link className="home-link" to="/">Home</Link>
                </div>
            </div>
            <div className="contact-us-container">
                <div className="content">
                    <div className="contact-us-text">
                        <div className="text-container">
                            Would you like to find out more and want to talk to someone?
                        </div>
                        <div className="text-container">
                            Contact us!
                        </div>
                    </div>
                    <div id="contact-information">
                        <div className="contact">Call us:  +64 22 123 4567</div>
                        <div className="contact">Email us:  cars4you@cars.com</div>
                        <div className="contact">Visit us:  1 Fifth Avenue, Wellington, New Zealand</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs
