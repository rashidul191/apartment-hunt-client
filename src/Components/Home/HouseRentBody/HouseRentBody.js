import React from 'react';
import HouseRent from './HouseRent/HouseRent';

import './HouseRentBody.css';
import Service from './Service/Service';



const HouseRentBody = () => {
    return (
        <section>
            <div className="container">
                <div className="house-rent-body">
                    <div className="container">
                        <div className="container">
                            <HouseRent></HouseRent>
                            <Service></Service>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HouseRentBody;