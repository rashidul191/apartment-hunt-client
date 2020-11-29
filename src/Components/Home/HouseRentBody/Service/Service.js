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
                    <h6><small>Service</small></h6>
                    <h2>We're an agency tailored to all <br /> client's needs that always delivers</h2>
                    <div className="pt-4">
                        <div class="card-deck">
                            <div class="card">
                                <div className="img-position-size">
                                    <img src={apartment1} class="card-img-top service-img" alt="..." />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={affordable1} class="card-img-top service-img" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={lessee1} class="card-img-top service-img" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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