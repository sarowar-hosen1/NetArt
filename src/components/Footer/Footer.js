import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="container">
                    <div className="footer-content">
                        <div className="sec">
                            <i class="fas fa-phone-alt"></i>
                            <p>18002001234</p>
                        </div>
                        <div className="sec">
                            <i class="fab fa-facebook"></i>
                            <p>www.facebook.com/cripumps</p>
                        </div>
                        <div className="sec">
                            <i class="fas fa-globe"></i>
                            <p>www.crigroups.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;