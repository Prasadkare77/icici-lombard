import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';

import './style.css';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Dropdown from 'react-bootstrap/Dropdown';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import CashlessLogo from './assets/healthInsurance/PlanPage/cashless_logo.png'
import Grouplg1_logo from './assets/healthInsurance/PlanPage/grouplg1_logo.svg'
import Grouplg2_logo from './assets/healthInsurance/PlanPage/grouplg2_logo.svg'
import Grouplg3_logo from './assets/healthInsurance/PlanPage/grouplg3_logo.svg'
import Grouplg4_logo from './assets/healthInsurance/PlanPage/grouplg4_logo.svg'
import Grouplg5_logo from './assets/healthInsurance/PlanPage/grouplg5_logo.svg'

import HospIcon from './assets/healthInsurance/PlanPage/hosp_icon.svg'


import CashlessBanner from './assets/healthInsurance/PlanPage/cashless_hospital_banner.png'
import Grouplg1 from './assets/healthInsurance/PlanPage/grouplg1.png'
import Grouplg2 from './assets/healthInsurance/PlanPage/grouplg2.png'
import Grouplg3 from './assets/healthInsurance/PlanPage/grouplg3.png'
import Grouplg4 from './assets/healthInsurance/PlanPage/grouplg4.png'
import Grouplg5 from './assets/healthInsurance/PlanPage/grouplg5.png'

const PlanPage = () => {
  const navigate = useNavigate()

  const [adult,setAdult] = useState('');
  const [date, setDate] = useState('')

  const [selectedValue, setSelectedValue] = useState('2');


  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value); 
  }

  return (
    <div>
      <div className='container1 pt-4 pb-5'>
        <div className='adultDetails text-primary mb-1'>
          1 {adult}, Adult {adult} DOB: {date} <a className='editAdult' onClick={()=>navigate('/healthInsurance')}>edit</a>
          
        </div>
        <div className='whiteContainer rounded ms-4 me-4 pb-5'>
          <div className='leftSide d-inline-block'>
            <div className='pt-4 ms-4 mb-2'>
              <h6>Health Advantedge Apex Plus Benefits</h6>
            </div>
            <div className='befitTab ms-4 pt-2'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={1}>
                  <Nav variant="tabs" className="flex-column">
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="first"><img src={CashlessLogo} alt=''></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="second"><img src={Grouplg1_logo} alt=''></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="third"><img src={Grouplg2_logo} alt=''></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="fourth"><img src={Grouplg3_logo} alt=''></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="fifth"><img src={Grouplg4_logo} alt=''></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="sixth"><img src={Grouplg5_logo} alt=''></img></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content className='tabBackgd ms-5'>
                    <Tab.Pane className='' eventKey="first">
                      <div className='tabbg d-block'>
                        <img src={CashlessBanner} alt=''></img>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        <h5>Cashless Hospitalisation At ALL<br/> Hospitals Near You</h5>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        No more waitng for claim refunds. Get quality medical<br/> treatment without any financial stress.
                      </div>
                      <div>
                      <div className='d-block ps-4 pt-3 font-weight-normal'>
                        <p className='infromus'>Inform us 24 hrs before to avail of cashless treatment. Subject to<br/> confirmation from the respective hospital/healthcare provider.</p>
                      </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className='' eventKey="second">
                      <h6 className='basicc ps-4 pt-4'>Basic Covers</h6>
                      <div className='tabbg d-inline-block'>
                        <img src={Grouplg1} alt=''></img>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        <h5>In Patient Treatment</h5>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        Cover your medical expenses in case of your<br/> hospitalisation due to an injury or illness
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className='' eventKey="third">
                      <h6 className='basicc ps-4 pt-4'>Basic Covers</h6>
                      <div className='tabbg d-inline-block'>
                        <img src={Grouplg2} alt=''></img>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        <h5>Pre & Post Hospitalization</h5>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        You can claim 60 days medical expenses incurred<br/>
                        before hospitalisation and 180 after<br/>
                        hospitaliasation
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className='' eventKey="fourth">
                      <h6 className='basicc ps-4 pt-4'>Basic Covers</h6>
                      <div className='tabbg d-inline-block'>
                        <img src={Grouplg3} alt=''></img>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        <h5>Donor Expenses</h5>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        We cover the expenses in case you require an organ<br/> donation
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className='' eventKey="fifth">
                      <h6 className='basicc ps-4 pt-4'>Basic Covers</h6>
                      <div className='tabbg d-inline-block'>
                        <img src={Grouplg4} alt=''></img>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        <h5>Daycare Procedures And Treatment</h5>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        Covers medical surgeries and procedures that<br/>
                        require less than 24 hours of hospitalisation<br/>
                        (includind dialysis, radiotherapy and chemotherapy)
                      </div>
                    </Tab.Pane>
                    <Tab.Pane className='' eventKey="sixth">
                      <h6 className='basicc ps-4 pt-4'>Basic Covers</h6>
                      <div className='tabbg d-inline-block'>
                        <img src={Grouplg5} alt=''></img>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        <h5>In Patient AYUSH Hospitalisation</h5>
                      </div>
                      <div className='d-block ps-4 pt-3'>
                        Covers medical expenses for alternative treatment<br/>
                        Under Ayuverda, Unami, Siddha and Homeopathy<br/>
                        (includind dialysis, radiotherapy and chemotherapy)
                      </div>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </div>
            <div className='hospitalSearch ms-4 mt-5 pt-3  ps-3 border border-1 rounded'>
            <div className='d-inline-block'>
              <img src={HospIcon}></img>
            </div>
            <div className='d-inline-block ms-4'>
              <Form>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Enter Pincode/city*"
                    aria-label="Enter Pincode/city*"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Search Hospital
                  </Button>
                </InputGroup>
              </Form>
              
            </div>
            </div>
          </div>
          <div className="rightSide d-inline-block ms-3">
            <div className='d-block pt-4 ms-4 mb-2'>
              <h6>Health Advantedge Apex Plus</h6>
            </div>
            <div className='border rounded p-2'>
              <div className='d-inline-block ms-4 mb-2'>
                <span className=''>Sum insured (SI)</span>
                <select className="form-select" value={selectedValue} onChange={handleSelectChange} aria-label="Default select example">
                  <option value="1">₹7,50,000</option>
                  <option value="2">₹10,00,000</option>
                  <option value="3">₹10,00,000</option>
                  <option value="4">₹15,00,000</option>
                  <option value="5">₹20,00,000</option>
                  <option value="6">₹25,00,000</option>
                  <option value="7">₹30,00,000</option>
                  <option value="8">₹40,00,000</option>
                  <option value="9">₹50,00,000</option>
                  <option value="10">₹75,00,000</option>
                  <option value="11">₹1,00,00,000</option>
                </select>
              </div>
              <div className='d-inline-block ms-5'>
                <p>I am recommending a plan that provides<br/>
                coverage worth ₹136 for every ₹1 you spend.</p>
              </div>
              <div className='ms-4'>
                <h6>What is sum insured (SI)</h6>
                <p>It is the maximum amount that you can claim under your policy (in a<br/> particular policy year) for hospitalisation. Read more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanPage
