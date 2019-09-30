import React from 'react';
import Banner from './Banner';
import chefStamp from '../assets/chef-stamp.png';

function About() {
    return ( 
        <React.Fragment>
            <Banner 
                heading="THE BEST FOODIE EXPERIENCE"
                subHeading="NOW IN LONDON"
            >
                <img className="chef-stamp absolute" src={chefStamp} alt="chef stamp" />
            </Banner>
        </React.Fragment>
    );
}

export default About;