import React from 'react';
import './Footer.css';
import mapLocation from '../../../logos/locations-map-marker-512.png'
import fb from '../../../logos/Vector.png';
import instagram from '../../../logos/Vector-1.png';
import linkedIn from '../../../logos/Vector-2.png';
import youTube from '../../../logos/Vector-3.png';

const Footer = () => {
    return (
        <section>
            <div className="container">
                <div className="footer-body">
                
                        <div className="footer-container">
                            <div className="row ">

                                <div className="col-md-5">
                                  <p> <img className="footer-map-icon" src={mapLocation} alt="" />
                                      H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh<br/>
                                      phone: 018XX XXX XXX <br/>
                                      E-mail: info@company.com 
                                   </p>
                                    
                                </div>
                                <div className="col-md-2">
                                    <h5>Company</h5><br/>                           
                                    <p>About</p>
                                    <p>Site Map</p>
                                    <p>Support Center</p>
                                    <p>Terms Conditions</p>
                                    <p>Submit Listing</p>
                                </div>
                                <div className="col-md-2">
                                    <h5>Quick Links</h5><br/>
                                    <p>Quick Links</p>
                                    <p>Rentals</p>
                                    <p>Sales</p>
                                    <p>Contact</p>
                                    <p>Terms Conditions</p>
                                    <p>Our blog</p>
                                </div>
                                <div className="col-md-3">
                                    <h5>About us</h5><br/>
                                    <p>We ate the top real estate agency in Sydney, with agents available to answer ony questions 24/7.</p><br/>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img className="footer-social-icon" src={fb} alt=""/>
                                        </div>
                                        <div className="col-md-3">
                                            <img className="footer-social-icon" src={instagram} alt=""/>
                                        </div>
                                        <div className="col-md-3">
                                            <img className="footer-social-icon" src={linkedIn} alt=""/>
                                        </div>
                                        <div className="col-md-3">
                                            <img className="footer-social-icon" src={youTube} alt=""/>
                                        </div>

                                    </div>
                                </div>
                            </div>

                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;