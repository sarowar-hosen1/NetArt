import React from 'react';
import logo from '../../images/logo.png';
import award from '../../images/1.png';
import award2 from '../../images/2.png';

import './Home.css';

const HomeMain = () => {
    return (
        <div className="home">
            <div className="award-image">
                <img src={award} alt="" />
            </div>

            <div className="award-content">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <h6>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h6>
                <ul>
                    <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </ul>
                <img src={award2} alt="" />
                <p>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
            </div>
        </div>
    );
};

export default HomeMain;