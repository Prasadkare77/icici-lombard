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
            
            <div class='container1 pb-5'>
                <div class='d--block pt-5 text-light text-center'>
                    <h1>Zero hassle health policies starting @₹18/day<sup>A</sup></h1>
                    <h6>No medical checkup required<sup>B</sup> | Instant policy<sup>P</sup> All plans cover COVID-19 | 7500+ Healthcare providers<sup>C</sup> | 60 mins<sup>D</sup> TAT for cashless hospitalisation</h6>
                </div>
                <div class='container-lg d-block bg-light rounded mt-4 mb-5'> 

                    <div className='border border-top-0 mb-5 ms-0 me-0 text-dark'>
                        <Nav justify variant="tabs" defaultActiveKey="/home">
                            <Nav.Link className='border border-top-0 pt-3 text-start' href="#comphrensiveHealth">
                                <Nav.Item >
                                    <div className="Comprehensive d-inline-block text-start active"><h6 className='text-dark ms-3'>Comprehensive<br/> Health Insurance</h6></div>
                                    <div class="d-inline-block ms-5"><img src={AllInclusive} class="img-thumbnail" alt="..."></img></div>
                                    <div class="ps-2 pe-2 text-start"><p className="desk-para text-dark">Cashless health care for mild sickness to hospitalisation</p></div>
                                </Nav.Item>
                            </Nav.Link>
                            <Nav.Link className='border border-top-0 pt-3 text-start' href="#comphrensiveHealth">
                                <Nav.Item> 
                                    <div className="d-inline-block text-start"><h6 className='text-dark ms-3'>Health Advant Edge</h6></div>
                                    <div class="d-inline-block ms-3"><img src={Health} class="img-thumbnail" alt="..."></img></div>
                                    <div class="ps-2 pe-2 text-start"><p className="desk-para text-dark">Comprehensive health policy</p></div>
                                </Nav.Item>
                            </Nav.Link> 
                            <Nav.Link className='border border-top-0 pt-3 text-start'>     
                                <Nav.Item >
                                    <div className="d-inline-block text-start"><h6 className='text-dark'>Health Booster</h6></div>
                                    <div class="d-inline-block ms-5"><img src={HealthBooster} class="img-thumbnail" alt="..."></img></div>
                                    <div class="ps-2 pe-2 text-start"><p className="text-dark">Increase your existing cover value</p></div>
                                </Nav.Item>
                            </Nav.Link>
                            <Nav.Link className='border border-top-0 pt-3 text-start'>
                                <Nav.Item >
                                    <div className="d-inline-block text-start"><h6 className='text-dark'>Personal Protect</h6></div>
                                    <div class="d-inline-block ms-5"><img src={PersonalProtect} class="img-thumbnail" alt="..."></img></div>
                                    <div class="ps-2 pe-2 text-start"><p className="desk-para text-dark">Accident protection</p></div>
                                </Nav.Item>
                            </Nav.Link>
                        </Nav>
                    </div>


                    <div id="comphrensiveHealth">
                        <div class="ms-1 disabled" > 
                            <div className='border rounded p-3 ms-3 d-inline-block'>
                                <span class="AdultB"><strong>Adult(s)</strong></span>
                                <span class="sm_f"> (21 years &amp; above)</span>
                                <button className="minusBtn bg-danger-subtle bg-opacity-25 border-0 rounded ms-5 me-3 ps-2 pe-2 text-secondary"><b>-</b></button>
                                <span>0</span>
                                <button className="plusBtn bg-danger-subtle bg-opacity-25 border-0 rounded ms-3"><b>+</b></button>
                            </div>
                            <div className='border rounded p-3 ms-5 d-inline-block'>
                                <span class="AdultB"><strong>Kid(s)</strong></span>
                                <span class="sm_f"> (3 months - 18 years) </span>
                                <button class="bg-danger-subtle bg-opacity-25 border-0 rounded ms-5 me-3 ps-2 pe-2 text-secondary"><b>-</b></button>
                                <span>0</span>
                                <button class="bg-danger-subtle bg-opacity-25 border-0 rounded ms-3 text-danger "><b>+</b></button>
                            </div>
                        </div>
                        <div class="mt-4 ms-3">
                            <form onSubmit={PlanPage.jsx}>
                                <div class="d-inline-block me-5 input-block">
                                    <input class="border-bottom border-0 p-3 rounded" type="text" placeholder='Mobile Number*'></input>
                                </div>
                                <div class="d-inline-block me-5">
                                    <input class=" border-bottom border-0 p-3 rounded" type="email" placeholder='Email*'></input>
                                </div>
                                <div class="d-inline-block me-5">
                                    <input class="border-bottom border-0 p-3 rounded" type="text" placeholder='Pincode*'></input>
                                </div>
                                <div class="d-inline-block ms-5">
                                    <button type="submit" class="rounded-pill p-3 btn btn-secondary" onClick={()=>navigate('/PlanPage')}>Get Quote</button>
                                </div>
                            </form>
                        </div>
                        <div class="d-block pt-3 ms-3">
                            <p>
                                <span class="text-danger me-2" id="portexipolicy"><u>Port existing policy</u></span>
                                <i class="fa fa-exclamation-circle text-danger" aria-hidden="true"></i>
                            </p>
                        </div>

                        <div class="cashBefit row rounded ms-3 me-3 mb-3">
                            <div class="cashlessHospital rounded col d-inline-block m-2 p-2">
                                <div class="d-inline-block ms-3 me-3">
                                    <img src={Cashless} class="Cashless img-thumbnail " alt="..."></img> 
                                </div>
                                <div class="d-inline-block">
                                    <div class="d-block">
                                        <span class="text-light fw-bold">Cashless hospitalisation at ALL<br/> hospitals near you*</span>
                                    </div>
                                    <div class="d-block">
                                        <span class="text-light-emphasis">Choose any hospital for your treatment No more waiting for<br/> claim refund</span>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="befitCover rounded col d-inline-block m-2 p-2">
                                <div class="d-inline-block ms-3 me-3">
                                    <img src={Befitbanner} class="Befitbanner img-thumbnail" alt="..."></img>
                                </div>
                                <div class="d-inline-block">
                                    <div>
                                        <span class="text-light fw-bold">Make smart health choices<br/> with Befit Cover</span>
                                    </div>
                                    <div>
                                        <span class="text-light-emphasis">Comprehensive cashless policy for you<br/> and your family's day-to-day health needs</span>
                                    </div>
                                </div>
                                <div class="d-inline-block text-light">
                                    <i class="fa fa-thumbs-up" aria-hidden="true"></i>IL Advantage
                                </div>
                                
                            </div>
                        </div>

                        <div class="ms-3 pb-1">
                            <p>*Inform us 24 hrs before to avail of cashless treatment. Subject to confirmation from the respective hospital/healthcare provider.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}


export default HealthInsurance

