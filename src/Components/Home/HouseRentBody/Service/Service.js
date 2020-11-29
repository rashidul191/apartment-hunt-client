import React from 'react';
import apartment1 from '../../../../logos/apartment 1.png';
import affordable1 from '../../../../logos/affordable 1.png';
import lessee1 from '../../../../logos/lessee 1.png';
import './Service.css';

const Service = () => {
    return (
        <section>
            <div className="container">
                <div className="service-body pt-5">
                    <h6>Service</h6>
                    <h2>We're an agency tailored to all <br /> client's needs that always delivers</h2>
                    <div className="pt-4">
                        <div class="row">
                            <div class="col-md-4">
                                <div className="img-position-size">
                                    <img src={apartment1} class="card-img-top service-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Wide Range of Properties</h5>
                                    <p class="card-text">With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                                   
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div className="img-position-size">
                                    <img src={affordable1} class="card-img-top service-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Financing Made Easy</h5>
                                    <p class="card-text">Our stress-free finance department that can find financial solutions to save you money</p>
                                    
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div className="img-position-size">
                                    <img src={lessee1} class="card-img-top service-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Trusted by Thousands</h5>
                                    <p class="card-text">10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Service;