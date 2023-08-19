import React from 'react'

// React Bootsrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

// Images
import MainBannerBG from './assets/homeAssets/main-banner-bg.jpg'
import FamilyBannerImg from './assets/homeAssets/banner-img.png'

// Image Icons
import Car from './assets/homeAssets/car.png'
import Bike from './assets/homeAssets/bike.png'
import Health from './assets/homeAssets/health.png'
import Travel from './assets/homeAssets/travel.png'
import Business from './assets/homeAssets/business.png'
import Renewal from './assets/homeAssets/renewal.png'

//Carousels
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// Carousel Images
import Abha from './assets/homeAssets/Carousel/abha_desktop.jpg'
import BannerSalam from './assets/homeAssets/Carousel/banner-salam-msme-02.jpg'
import BimaBharosa from './assets/homeAssets/Carousel/bima-bharosa_website-banner-01.png'
import CashlessBanner from './assets/homeAssets/Carousel/cashless-banner-desktop.jpg'
import Cyclone from './assets/homeAssets/Carousel/cyclone-biparjoy.jpg'


const Home = () => {
  return (
    <div>
      <div class="background">
        <div class="main-banner-bg">
            <div className='d-inline-block ms-4'>
                <h2>Over 4 crore customers have faith in<br/> us because we care.</h2>
            </div>
            <div className="banner-img d-inline-block">
                <img src={FamilyBannerImg} alt=""/>
            </div> 
        </div>
        <div className="iconContainer bg-light border rounded d-inline-block">
            <div className="icons ms-4">
                <div className="carTab d-inline-block bg-light text-center">
                    <div className="car border rounded ps-3 pe-3 pt-4 pb-3 d-block ">
                        <img className="" src={Car} alt="" /> 
                    </div>
                    <div>
                        <p className='d-block mt-3 d-block'>Car</p>
                    </div>
                </div>
                <div className="bikeTab d-inline-block ms-4 bg-light text-center">
                    <div className="bike border rounded p-3 d-block">
                        <img className="" src={Bike} alt="" /> 
                    </div>
                    <div>
                        <p className='d-block mt-3 d-block'>Bike</p>
                    </div>
                </div>
                <div className="healthTab d-inline-block ms-4 bg-light text-center">
                    <div className="bike border rounded p-3">
                        <img className="" src={Health} alt="" /> 
                    </div>
                    <div>
                        <p className='d-block mt-3'>Health</p>
                    </div>
                </div>
                <div className="traveltab d-inline-block ms-4 bg-light text-center">
                    <div className="bike border rounded p-3">
                        <img className="" src={Travel} alt="" /> 
                    </div>
                    <div>
                        <p className='d-block mt-3'>Travel</p>
                    </div>
                </div>
                <div className="businessTab d-inline-block ms-4 bg-light text-center">
                    <div className="bike border rounded p-3">
                        <img className="" src={Business} alt="" /> 
                    </div>
                    <div>
                        <p className='d-block mt-3'>Business</p>
                    </div>
                </div>
                <div className="renewaltab d-inline-block ms-4 bg-light text-center">
                    <div className="bike border rounded p-3">
                        <img className="" src={Renewal} alt="" /> 
                    </div>
                    <div>
                        <p className='d-block mt-3'>Renewal</p>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='iconFormText bg-light d-inline-block'>
                <form>
                    <div className="carReg d-inline-block">
                        <label htmlFor="">Car registration no.<span className='text-danger'><sup>*</sup></span></label><br/>
                        <input class="border-bottom border-0 pt-3 pb-3 mb-3 rounded" type="text" placeholder='E.G. MH01DF5698' />
                    </div>
                    <div className="mobNo d-inline-block ms-5">
                        <label htmlFor="">Mobile number.<span className='text-danger'><sup>*</sup></span></label><br/>
                        <input class="border-bottom border-0 pt-3 pb-3 mb-3 rounded" type="text" placeholder='Enter mobile no.' />
                    </div>
                    <div className="email d-inline-block ms-5">
                        <label htmlFor="">Email<span className='text-danger'><sup>*</sup></span></label><br/>
                        <input class="border-bottom border-0 pt-3 pb-3 mb-3 rounded" type="text" placeholder='Enter email address.' />
                    </div>
                    <div className="d-inline-block ms-5">
                            <button class="btn-quote rounded-pill p-3 btn">Get Quote</button>
                    </div>
                </form>
                <div className='got'>
                    <span className='gotaNewVehicle'><u>Got a new vehicle</u></span>
                    <span className='recentQuote'><u>Recent Quote</u></span>
                </div>
            </div>
        </div>
        
        <div className="carousels border rounded d-inline-block">
            <Carousel showArrows={true} showThumbs={false}>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={Abha} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={BannerSalam} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={BimaBharosa} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home
