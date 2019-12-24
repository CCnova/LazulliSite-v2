import React from 'react';
import logo from '../../assets/img/lazulilogo7.jpg';
import classes from './TopBar.module.css';
import NavLink from '../NavLink/NavLink';

const topBar = () => { 
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-dark ${classes.navbar}`}>
            <a className="navbar-brand" href="#home"><img className={classes.logoResponsive} alt="Logo" src={logo} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className={`navbar-nav`}>
                    <li className="nav-item active">
                        <NavLink to="#home" content="Home" />
                    </li>
                    <li className="nav-item">
                        <NavLink to="#servicos" content="Servicos" />
                    </li>
                    <li className="nav-item">
                        <NavLink to="#sobre" content="Sobre" />
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="#contato" content="Contato" />
                    </li>
                </ul>
            </div>
        </nav> 
    );
};

export default topBar;