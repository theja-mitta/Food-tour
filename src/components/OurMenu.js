import React from 'react';
import MenuSlide from './MenuSlide';
import { Parallax } from "react-skrollr";
import SectionHeader from './SectionHeader';

const transitionA = {
    "data-top-bottom": "transform: translateX(0%);",
    "data-center-center": "opacity: 1;",
    "data-bottom-top": "opacity: 0;transform: translateX(-70%);"
};

const transitionB = {
    "data-top-bottom": "transform: translateX(0%);",
    "data-center-center": "opacity: 1;",
    "data-bottom-top": "opacity: 0;transform: translateX(70%);"
};

const OurMenu = () => (
    <div className="ui container">
        <SectionHeader title="OUR MENU" menuHeaderColor={{backgroundColor: '#ffdac8'}} buttonText="KNOW MORE"/>
        <div className="menu-row">
            <Parallax data={transitionA}>
                <MenuSlide 
                    menuCategory="STARTERS"
                />
            </Parallax>
        </div>
        <div className="menu-row">
            <Parallax data={transitionB}>
                <MenuSlide 
                    menuCategory="MAIN COURSES"
                />
            </Parallax>
        </div>
        <div className="menu-row">
            <Parallax data={transitionA}>
                <MenuSlide 
                    menuCategory="SIDES"
                />
            </Parallax>
        </div>
        <div className="menu-row">
            <Parallax data={transitionB}>
                <MenuSlide 
                    menuCategory="DESSERTS"
                />
            </Parallax>
        </div>
    </div>
);

export default OurMenu;