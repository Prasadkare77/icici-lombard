import React from 'react'

import './style.css';

import Cashless from './assets/healthInsurance/cashlesshospitalmob_landing.png'
import Befitbanner from './assets/healthInsurance/befitbannermobile.png'

const ComphrensiveHealth = () => {
  return (
    <div>
      <div id="comphrensiveHealth">
        <div class="ms-1 disabled" > 
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

        <div class="mt-4 ms-3">
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
  )
}

export default ComphrensiveHealth
