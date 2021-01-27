import React from 'react';
import banner from '../assets/img/Frame.png';

const Banner = () => {
    return (
            <div className="header-banner">
                <img src={banner} alt="Habla Fácil Logo" />
                <hr></hr>
            </div>
    )
};

export default Banner;