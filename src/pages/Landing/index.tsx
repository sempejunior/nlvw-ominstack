import React from 'react';

const logoImg = require("../../assets/images/logo.svg") as string;

function Landing() {
    return (

        <div id="page-landing">
            <div id="page-landing-content" className="container">

                <div id="logo-container">
                    <img src={logoImg} alt="Proffy"/>

                </div>
            </div>

        </div>

)
}

export default Landing;