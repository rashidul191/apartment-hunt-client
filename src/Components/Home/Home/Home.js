import React from 'react';
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
        </section>
    );
};

export default Home;