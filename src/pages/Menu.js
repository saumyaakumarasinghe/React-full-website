import React from 'react';
import { MenuArray } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menueTitle'> We Serve </h1>
      <div className='menuList'>
        {MenuArray.map((menuItem, key) => {
            return (
            <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                price={menuItem.price}
            />
            );
        })}
      </div>
    </div>
  );
}

export default Menu;