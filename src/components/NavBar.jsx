// components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Mi Tienda</h2>
      </div>
      
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      
      <CartWidget />
    </nav>
  );
};

export default NavBar;