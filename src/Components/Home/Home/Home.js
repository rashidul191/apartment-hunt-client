import React from 'react';
import HouseRent from '../../HouseRent/HouseRent';
import Navbar from '../../Sharing/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Home = () => {
    return (
        <section>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <HeaderMain></HeaderMain>
            </div>
            <div>
                <HouseRent></HouseRent>
            </div>
        </section>
    );
};

export default Home;