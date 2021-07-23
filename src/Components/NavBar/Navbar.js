import React from "react";
import logo from "./comarca-logo-ok.png";
import "./Navbar.css";

import CartWidget from "../Cart/CartWidget";

// LINKS
import { Link, useHistory } from "react-router-dom";

// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({
  item1,
  item2,
  item3,
  subitem1,
  subitem2,
  subitem3,
  subitem4,
  subitem0,
}) => {
  const history = useHistory();

  const handleChange = (el) => {
    if (el.target.value) {
      history.push(`/categoria/${el.target.value}`);
    }
  };

  return (
    <Navbar expand='lg' className='nav-container'>
      <Navbar.Brand>
        <Link to='/'>
          <img
            width='200'
            className='d-inline-block align-top'
            src={logo}
            alt='comarca de creadores logo'
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <p className='buscar-txt'>{item1}</p>
          <select className='select-container' onChange={handleChange}>
            <option value='all'>{subitem0}</option>
            <option value='artistica'>{subitem1} </option>
            <option value='libreria'>{subitem2} </option>
            <option value='merceria'>{subitem3} </option>
            <option value='emprendedores'>{subitem4} </option>
          </select>
          <Link to='/talleres' className='Link'>
            {item2}
          </Link>
          <Link to='/nosotros' className='Link'>
            {item3}
          </Link>
        </Nav>
        <CartWidget />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
