import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container'

import Nav from "react-bootstrap/Nav";
import './style.css';

function HealthInsurance() {
    return (
        <div>
            <div class='container1'>
                <div class='d--block pt-5 text-light text-center'>
                    <h1>Zero hassle health policies starting @₹18/day<sup>A</sup></h1>
                    <h6>No medical checkup required<sup>B</sup> | Instant policy<sup>P</sup> All plans cover COVID-19 | 7500+ Healthcare providers<sup>C</sup> | 60 mins<sup>D</sup> TAT for cashless hospitalisation</h6>
                </div>
                <div class='container-sm d-block bg-light rounded mt-4 mb-5'> 

                    <div className='border border-top-0 mb-5 ms-0 me-0 text-dark'>
                        <Nav justify variant="tabs" defaultActiveKey="/home">
                            <Nav.Item className='border border-top-0 pt-3 text-start' href="#">
                                <div class="d-inline-block text-start active"><Nav.Link href="/"><h6>Comprehensive<br/> Health Insurance</h6></Nav.Link></div>
                                <div class="d-inline-block ms-5"><img src="assets/all-cashless.png" class="img-thumbnail" alt="..."></img></div>
                                <div class="ps-2 pe-2 text-start"><p class="desk-para">Cashless health care for mild sickness to hospitalisation</p></div>
                            </Nav.Item>
                            <Nav.Item className='border border-top-0 pt-3 text-start'> 
                                <div class="d-inline-block text-start"><Nav.Link href="/"><h6>Health Advant Edge</h6></Nav.Link></div>
                                <div class="d-inline-block ms-5"><img src="assets/all-cashless.png" class="img-thumbnail" alt="..."></img></div>
                                <div><p class="ps-2 pe-2 text-start">Comprehensive health policy</p></div>
                            </Nav.Item>
                            <Nav.Item className='border border-top-0 pt-3 text-start'>
                                <div class="d-inline-block text-start"><Nav.Link href="/"><h6>Health Booster</h6></Nav.Link></div>
                                <div class="d-inline-block ms-5"><img src="assets/all-cashless.png" class="img-thumbnail" alt="..."></img></div>
                                <div><p class="ps-2 pe-2 text-start">Increase your existing cover value</p></div>
                            </Nav.Item>
                            <Nav.Item className='border border-top-0 pt-3 text-start'>
                                <div class="d-inline-block text-start"><Nav.Link href="/"><h6>Personal Protect</h6></Nav.Link></div>
                                <div class="d-inline-block ms-5"><img src="assets/all-cashless.png" class="img-thumbnail" alt="..."></img></div>
                                <div><p class="ps-2 pe-2 text-start">Accident protection</p></div>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <div class="ms-1"> 
                        <div className='border rounded p-3 ms-3 d-inline-block'>
                            <span class="AdultB"><strong>Adult(s)</strong></span>
                            <span class="sm_f"> (21 years &amp; above)</span>
                            <button class="bg-danger-subtle bg-opacity-25 border-0 rounded ms-5 me-3 ps-2 pe-2 text-secondary"><b>-</b></button>
                            <span>0</span>
                            <button class="bg-danger-subtle bg-opacity-25 border-0 rounded ms-3 text-danger"><b>+</b></button>
                        </div>
                        <div className='border rounded p-3 ms-5 d-inline-block'>
                            <span class="AdultB"><strong>Kid(s)</strong></span>
                            <span class="sm_f"> (3 months - 18 years) </span>
                            <button class="bg-danger-subtle bg-opacity-25 border-0 rounded ms-5 me-3 ps-2 pe-2 text-secondary"><b>-</b></button>
                            <span>0</span>
                            <button class="bg-danger-subtle bg-opacity-25 border-0 rounded ms-3 text-danger "><b>+</b></button>
                        </div>
                    </div>

                    <div class="mt-5 ms-3">
                        <div class="d-inline-block me-5 input-block">
                            <input class="border-bottom border-0 p-3 rounded" type="text" placeholder='Mobile Number'></input>
                        </div>
                        <div class="d-inline-block me-5">
                            <input class=" border-bottom border-0 p-3 rounded" type="email" placeholder='Email'></input>
                        </div>
                        <div class="d-inline-block me-5">
                            <input class="border-bottom border-0 p-3 rounded" type="text" placeholder='Pincode'></input>
                        </div>
                        <div class="d-inline-block ms-5">
                            <button class="rounded-pill p-3 btn btn-secondary">Get Quote</button>
                        </div>
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
                                <img src="assets/all-cashless.png" class="img-thumbnail" alt="..."></img> 
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
                                <img src="assets/all-cashless.png" class="img-thumbnail" alt="..."></img>
                            </div>
                            <div class="d-inline-block">
                                <div>
                                    <span class="text-light fw-bold">Make smart health choices<br/> with Befit Cover</span>
                                </div>
                                <div>
                                    <span class="text-light-emphasis">Comprehensive cashless policy for you<br/> and your family's day-to-day health needs</span>
                                </div>
                            </div>
                            <div class="d-inline-block text-light ms-3">
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
    );
}


export default HealthInsurance

