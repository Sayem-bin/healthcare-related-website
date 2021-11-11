import React from 'react';
import AboutUs from '../About/AboutUs';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <AboutUs></AboutUs>


        </div>
    );
};

export default Home;