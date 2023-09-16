import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'

// React Router DOM
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";


import Nav from "react-bootstrap/Nav";
import './style.css';

//TabIcon
import AllInclusive from './assets/healthInsurance/all-inclusive.svg'
import Health from './assets/healthInsurance/health.svg'
import HealthBooster from './assets/healthInsurance/health-booster.svg'
import PersonalProtect from './assets/healthInsurance/personal-protect.svg'

import Cashless from './assets/healthInsurance/cashlesshospitalmob_landing.png'
import Befitbanner from './assets/healthInsurance/befitbannermobile.png'
import { Form } from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import PlanPage from './PlanPage';


function HealthInsurance() {
    const navigate = useNavigate()
    const addAdult = ()=>{
    }
    const onSubmit = () => {
    
    }

    return (
        <div>
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
            <div className='container1 pb-5'>
                <div className='d--block pt-5 text-light text-center'>
                    <h1>Zero hassle health policies starting @₹18/day<sup>A</sup></h1>
                    <h6>No medical checkup required<sup>B</sup> | Instant policy<sup>P</sup> All plans cover COVID-19 | 7500+ Healthcare providers<sup>C</sup> | 60 mins<sup>D</sup> TAT for cashless hospitalisation</h6>
                </div>
                <div className='container-lg d-block bg-light rounded mt-4 mb-5'> 

                    <div classNameName='border border-top-0 mb-5 ms-0 me-0 text-dark'>
                        <Nav justify variant="tabs" defaultActiveKey="/home">
                            <Nav.Link classNameName='border border-top-0 pt-3 text-start' href="#comphrensiveHealth">
                                <Nav.Item >
                                    <div classNameName="Comprehensive d-inline-block text-start active"><h6 classNameName='text-dark ms-3'>Comprehensive<br/> Health Insurance</h6></div>
                                    <div className="d-inline-block ms-5"><img src={AllInclusive} className="img-thumbnail" alt="..."></img></div>
                                    <div className="ps-2 pe-2 text-start"><p classNameName="desk-para text-dark">Cashless health care for mild sickness to hospitalisation</p></div>
                                </Nav.Item>
                            </Nav.Link>
                            <Nav.Link classNameName='border border-top-0 pt-3 text-start' href="#comphrensiveHealth">
                                <Nav.Item> 
                                    <div classNameName="d-inline-block text-start"><h6 classNameName='text-dark ms-3'>Health Advant Edge</h6></div>
                                    <div className="d-inline-block ms-3"><img src={Health} className="img-thumbnail" alt="..."></img></div>
                                    <div className="ps-2 pe-2 text-start"><p classNameName="desk-para text-dark">Comprehensive health policy</p></div>
                                </Nav.Item>
                            </Nav.Link> 
                            <Nav.Link classNameName='border border-top-0 pt-3 text-start'>     
                                <Nav.Item >
                                    <div classNameName="d-inline-block text-start"><h6 classNameName='text-dark'>Health Booster</h6></div>
                                    <div className="d-inline-block ms-5"><img src={HealthBooster} className="img-thumbnail" alt="..."></img></div>
                                    <div className="ps-2 pe-2 text-start"><p classNameName="text-dark">Increase your existing cover value</p></div>
                                </Nav.Item>
                            </Nav.Link>
                            <Nav.Link classNameName='border border-top-0 pt-3 text-start'>
                                <Nav.Item >
                                    <div classNameName="d-inline-block text-start"><h6 classNameName='text-dark'>Personal Protect</h6></div>
                                    <div className="d-inline-block ms-5"><img src={PersonalProtect} className="img-thumbnail" alt="..."></img></div>
                                    <div className="ps-2 pe-2 text-start"><p classNameName="desk-para text-dark">Accident protection</p></div>
                                </Nav.Item>
                            </Nav.Link>
                        </Nav>
                    </div>


                    <div id="comphrensiveHealth">
                        <div className="ms-1 disabled" > 
                            <div classNameName='border rounded p-3 ms-3 d-inline-block'>
                                <span className="AdultB"><strong>Adult(s)</strong></span>
                                <span className="sm_f"> (21 years &amp; above)</span>
                                <button classNameName="minusBtn bg-danger-subtle bg-opacity-25 border-0 rounded ms-5 me-3 ps-2 pe-2 text-secondary"><b>-</b></button>
                                <span>0</span>
                                <button classNameName="plusBtn bg-danger-subtle bg-opacity-25 border-0 rounded ms-3"><b>+</b></button>
                            </div>
                            <div classNameName='border rounded p-3 ms-5 d-inline-block'>
                                <span className="AdultB"><strong>Kid(s)</strong></span>
                                <span className="sm_f"> (3 months - 18 years) </span>
                                <button className="bg-danger-subtle bg-opacity-25 border-0 rounded ms-5 me-3 ps-2 pe-2 text-secondary"><b>-</b></button>
                                <span>0</span>
                                <button className="bg-danger-subtle bg-opacity-25 border-0 rounded ms-3 text-danger "><b>+</b></button>
                            </div>
                        </div>
                        <div className="mt-4 ms-3">
                            <form onSubmit={PlanPage.jsx}>
                                <div className="d-inline-block me-5 input-block">
                                    <input className="border-bottom border-0 p-3 rounded" type="tel" placeholder='Mobile Number*' required></input>
                                </div>
                                <div className="d-inline-block me-5">
                                    <input className=" border-bottom border-0 p-3 rounded" type="email" placeholder='Email*' required></input>
                                </div>
                                <div className="d-inline-block me-5">
                                    <input className="border-bottom border-0 p-3 rounded" type="text" placeholder='Pincode*' required></input>
                                </div>
                                <div className="d-inline-block ms-5">
                                    <button type="submit" className="rounded-pill p-3 btn btn-secondary" onClick={()=>navigate('/PlanPage')}>Get Quote</button>
                                </div>
                            </form>
                        </div>
                        <div className="d-block pt-3 ms-3">
                            <p>
                                <span className="text-danger me-2" id="portexipolicy"><u>Port existing policy</u></span>
                                <i className="fa fa-exclamation-circle text-danger" aria-hidden="true"></i>
                            </p>
                        </div>

                        <div className="cashBefit row rounded ms-3 me-3 mb-3">
                            <div className="cashlessHospital rounded col d-inline-block m-2 p-2">
                                <div className="d-inline-block ms-3 me-3">
                                    <img src={Cashless} className="Cashless img-thumbnail " alt="..."></img> 
                                </div>
                                <div className="d-inline-block">
                                    <div className="d-block">
                                        <span className="text-light fw-bold">Cashless hospitalisation at ALL<br/> hospitals near you*</span>
                                    </div>
                                    <div className="d-block">
                                        <span className="text-light-emphasis">Choose any hospital for your treatment No more waiting for<br/> claim refund</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="befitCover rounded col d-inline-block m-2 p-2">
                                <div className="d-inline-block ms-3 me-3">
                                    <img src={Befitbanner} className="Befitbanner img-thumbnail" alt="..."></img>
                                </div>
                                <div className="d-inline-block">
                                    <div>
                                        <span className="text-light fw-bold">Make smart health choices<br/> with Befit Cover</span>
                                    </div>
                                    <div>
                                        <span className="text-light-emphasis">Comprehensive cashless policy for you<br/> and your family's day-to-day health needs</span>
                                    </div>
                                </div>
                                <div className="d-inline-block text-light">
                                    <i className="fa fa-thumbs-up" aria-hidden="true"></i>IL Advantage
                                </div>
                                
                            </div>
                        </div>

                        <div className="ms-3 pb-1">
                            <p>*Inform us 24 hrs before to avail of cashless treatment. Subject to confirmation from the respective hospital/healthcare provider.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}


export default HealthInsurance

