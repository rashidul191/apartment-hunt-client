import React from 'react';
import './HouseRent.css';
import img1 from '../../../../images/Rectangle 394.png';
import img2 from '../../../../images/Rectangle 396.png';
import img3 from '../../../../images/Rectangle 398.png';
import img4 from '../../../../images/Rectangle 405.png';
import img5 from '../../../../images/Rectangle 403.png';
import img6 from '../../../../images/Rectangle 404.png';
import locationIcon from '../../../../logos/map-marker-alt-solid 1.png';
import bath1 from '../../../../logos/bath 1.png';
import bed1 from '../../../../logos/bed 1.png';


const HouseRent = () => {
    return (
        <section>
            <div className="container">
                <div className="text-center pt-3">
                    <h6><small>House Rent</small></h6>
                    <h2>Discover the latest Rent <br/>available today</h2>
                </div>
                <div className="">
                    <div className=" pt-3">
                        <div class="card-deck">
                            <div class="card">
                                <img src={img1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Washington Avenue</h5>
                                    <p class="card-text"> <img className="icon-size" src={locationIcon} alt="" /><small> Nasirabad H/S, Chattogram</small></p>
                                    <p class="card-text row">
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bed1} alt="" /><span> 3 Bedrooms</span>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bath1} alt="" /><span> 2 Bathrooms</span>
                                        </div>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="dollar-text">$194</h1>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn-view">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={img2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Family Apartment Three</h5>
                                    <p class="card-text"> <img className="icon-size" src={locationIcon} alt="" /><small> Nasirabad H/S, Chattogram</small></p>
                                    <p class="card-text row">
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bed1} alt="" /><span> 3 Bedrooms</span>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bath1} alt="" /><span> 2 Bathrooms</span>
                                        </div>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="dollar-text">$356</h1>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn-view">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={img3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Gorgeous house</h5>
                                    <p class="card-text"> <img className="icon-size" src={locationIcon} alt="" /><small> Nasirabad H/S, Chattogram</small></p>
                                    <p class="card-text row">
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bed1} alt="" /><span> 3 Bedrooms</span>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bath1} alt="" /><span> 2 Bathrooms</span>
                                        </div>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="dollar-text">$256</h1>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn-view">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" pt-5">
                        <div class="card-deck">
                            <div class="card">
                                <img src={img4} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Luxury villa</h5>
                                    <p class="card-text"> <img className="icon-size" src={locationIcon} alt="" /><small> Nasirabad H/S, Chattogram</small></p>
                                    <p class="card-text row">
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bed1} alt="" /><span> 3 Bedrooms</span>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bath1} alt="" /><span> 2 Bathrooms</span>
                                        </div>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="dollar-text">$345</h1>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn-view">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={img5} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Epic Huda Palacio</h5>
                                    <p class="card-text"> <img className="icon-size" src={locationIcon} alt="" /><small> Nasirabad H/S, Chattogram</small></p>
                                    <p class="card-text row">
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bed1} alt="" /><span> 3 Bedrooms</span>
                                        </div>
                                        <div className="col-md-6">
                                            <img className="icon-size-room" src={bath1} alt="" /><span> 2 Bathrooms</span>
                                        </div>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="dollar-text">$536</h1>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn-view">View Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <img src={img6} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Washington Avenue</h5>
                                    <p class="card-text"> <img className="icon-size" src={locationIcon} alt="" /><small> Nasirabad H/S, Chattogram</small></p>
                                    <p class="card-text row">
                                        <div className="col-md-6 p-0">
                                            <img className="icon-size-room" src={bed1} alt="" /><span> 3 Bedrooms</span>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <img className="icon-size-room" src={bath1} alt="" /><span> 2 Bathrooms</span>
                                        </div>
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h1 className="dollar-text">$283</h1>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="btn-view">View Details</button>
                                        </div>
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

export default HouseRent;