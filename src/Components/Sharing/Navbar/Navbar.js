import React from 'react';
import './Navbar.css';
import siteLogo from '../../../logos/Logo.png';

const Navbar = () => {
    return (
        <section className="container ">
            <div className=" bg-light">
                <div className="nav-bar">
                   
                        <nav class="navbar navbar-expand-lg navbar-light ">
                            <a class="navbar-brand" href="#"><img className="siteLogo" src={siteLogo} alt="" /></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active mr-4">
                                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item active mr-4">
                                        <a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item active mr-4">
                                        <a class="nav-link" href="#">Service <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item active mr-4">
                                        <a class="nav-link" href="#">Concerns <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item active mr-4">
                                        <a class="nav-link" href="#">Event <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item active mr-4">
                                        <a class="nav-link" href="#">Contact <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item active mr-4">
                                        <button className="login-btn">Login</button>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                  
                </div>
            </div>
        </section>
    );
};

export default Navbar;