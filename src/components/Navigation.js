import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navigation extends React.Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <span style={{ fontSize: '20px', padding: '0 20px' }}>LOGO</span>
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
                                ABOUT
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
                                OUR MENU
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
                                LOCATION
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
                                COMMUNITY
                            </Link>
                        </li>
                    </ul> 
                </div>
            </nav>
        );
    }
}