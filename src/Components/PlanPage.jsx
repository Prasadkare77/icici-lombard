import React from 'react'

import './style.css';

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import CashlessLogo from './assets/healthInsurance/PlanPage/cashless_logo.png'

const PlanPage = () => {
  return (
    <div>
      <div className='container1 pt-5 pb-5'>
        <div className='whiteContainer rounded ms-4 me-4'>
          <div className='pt-4 ms-4 mb-2'>
            <h6>Health Advantedge Apex Plus Benefits</h6>
          </div>
          <div className='befitTab ms-4 pt-2'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={1}>
                  <Nav variant="tabs" className="flex-row">
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="first"><img src={CashlessLogo}></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="second"><img src={CashlessLogo}></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="first"><img src={CashlessLogo}></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="second"><img src={CashlessLogo}></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="first"><img src={CashlessLogo}></img></Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='text-center m-1'>
                      <Nav.Link eventKey="second"><img src={CashlessLogo}></img></Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                    <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlanPage
