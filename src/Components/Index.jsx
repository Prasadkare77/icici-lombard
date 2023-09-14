import React, { Component } from "react";

// React Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';

import ilLogo from './assets/il-logo.png'

// React Router DOM
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";


import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// Component
import Home from "./Home";
import HealthInsurance from "./HealthInsurance";
import PlanPage from "./PlanPage";


// const navBgColor={background: linear-gradient(to top, #ff512f, #f09819)};
const Index = () => {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Router> 
          <Navbar expand="lg" class="navbar bg-body-tertiary">
            <Navbar.Brand href="/" className="ms-3 d-inline-block align-top">
              <img src={ilLogo} alt="ICICI" className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="dropdown me-auto ms-4 text-light">
                <NavDropdown title="Motor Insurance" id="basic-nav-dropdown" >
                  <div class="dropdown-content">
                    <div>
                      <NavDropdown.Item href="#action/3.1" id="dropdownItem">Motor Insurance</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2" id="dropdownItem">Car Insurance</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3" id="dropdownItem">Bike Insurance</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4" id="dropdownItem">Motor Floater</NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>
                <NavDropdown title="Health Insurance" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/healthInsurance" id="dropdownItem">Health Insurance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">Health Advant Edge</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Health Booster</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Personal Protect</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" id="dropdownItem">Arogya Sanjeevani Policy, ICICI Lombard</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">Corona Kavach Policy, ICICI Lombard</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Saral Suraksha Bima, ICICI Lombard</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Golden Sheild</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">iSheild</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Travel Insurance" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/healthInsurance" id="dropdownItem">Travel Insurance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">Single Trip action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Gold Multi Trip</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Student Travel</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Business Insurance" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" id="dropdownItem">Business Insurance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">Marine Transit</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Workmen's Compensation</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Group Health Insurance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" id="dropdownItem">Fire Insurance - Sookshma</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">Marine Open Insurance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Fire Insurance - Griha for Housing Societies</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Professional Indemnity Plicy for Medical Practitioners</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Other Insurance" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" id="dropdownItem">Crop</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">NRI</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Cyber Insurance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">ICICI Bharat Griha Raksha Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Complete Home Project</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Renewals" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" id="dropdownItem">All Ploicy Renewal</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">Car Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Bike Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Health Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Travel Policy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Business Insurance</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Claims" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" id="dropdownItem">Health Claims</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">Motor Claims</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Travel Claims</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Home Claims</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1" id="dropdownItem">Cyber Insurance Claims</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" id="dropdownItem">Ola Claims</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" id="dropdownItem">Redbus Claims</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Corporate Claims</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4" id="dropdownItem">Mobile Claims - M-Kash</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              
              <div className="me-4 text-light">
                  <Nav.Link href="/">Login<i class="fa fa-angle-right ms-1 " aria-hidden="true"></i></Nav.Link>
              </div>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/healthInsurance" element={<HealthInsurance />}></Route>
          <Route exact path="/planPage" element={<PlanPage/>}></Route>
        </Routes>
      </Router>
    </div>
    );
}

export default Index;
