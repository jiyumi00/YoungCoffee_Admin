import React, { Component } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import '../css/TopPage.css';
import LongLogo from "./../images/long_logo/long_logo.png";

import { Link } from 'react-router-dom';
export default class TopTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href='/' style={{ marginLeft: '15px'}}>
            <img style={{width:150}} src={LongLogo}/></Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/" className="logout">LOGOUT</Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

