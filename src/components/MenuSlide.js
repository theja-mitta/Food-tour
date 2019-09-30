import React from 'react';
import MenuItem from './MenuItem';

function MenuSlide(props) {
    return (
        <div className='menu-slide'>                      
            <div className="slide-to-animate ui grid">
                <div className="four wide column">
                    <div className="menu-category">{props.menuCategory}</div>
                </div>
                <MenuItem 
                    menuName="QUINOA CROQUETIAS" 
                    menuDescription="Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)" 
                    menuPrice="£4.95" 
                />
                <MenuItem 
                    menuName="QUINOA CROQUETIAS" 
                    menuDescription="Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)" 
                    menuPrice="£4.95" 
                />
                <MenuItem 
                    menuName="QUINOA CROQUETIAS" 
                    menuDescription="Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)" 
                    menuPrice="£4.95" 
                />
            </div>
        </div>
    );
}

export default MenuSlide;