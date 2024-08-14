import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title titulo">Mi Portfolio</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="#welcome">Inicio</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;