import React from 'react';

function MenuItem(props) {
    return (
        <div className="item_col  four wide column">
            <div className="item-name">{props.menuName}</div>
            <div className="item-description">{props.menuDescription}</div>
            <div className="item-price">{props.menuPrice}</div>
        </div>
    );
}

export default MenuItem;