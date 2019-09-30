import React from 'react';
import bannerLogo from '../assets/banner.png';

function Banner(props) {
    return (
        <div className="ui container">
            <img src={bannerLogo} className="banner-logo" alt="banner-logo" />
            <div className="absolute banner-text">
                <div className="banner-heading">{props.heading}</div>
                <div className="banner-subheading">{props.subHeading}</div>
            </div>
            {props.children}
        </div>
    );
}

export default Banner;