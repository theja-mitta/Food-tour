import React from 'react';

function SectionHeader(props) {
    return (
        <div className="section-header">
            <div className="menu-category">
                <span className="relative">
                    {props.title}
                    <span style={props.menuHeaderColor} className="absolute header-line"></span>
                </span>
            </div>
            <div>
                <span className="menu-cat-button">{props.buttonText}</span>
            </div>
        </div>
    );
}


export default SectionHeader;