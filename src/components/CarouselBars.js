import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default class CarouselBars extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <nav className="nav nav-bars" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item">
                            <Link 
                                className="item"
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <span className="absolute">01</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="item"
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <span className="absolute">02</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="item"
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <span className="absolute">03</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className=" item"
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                            >
                                <span className="absolute">04</span>
                            </Link>
                        </li>
                    </ul> 
                </div>
            </nav>
        );
    }
}