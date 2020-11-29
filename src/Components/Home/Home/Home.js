import React from 'react';
import Navbar from '../../Sharing/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import HouseRentBody from '../HouseRentBody/HouseRentBody';



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
                <HouseRentBody></HouseRentBody>
            </div>
        </section>
    );
};

export default Home;