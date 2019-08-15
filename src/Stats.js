import React from 'react';
import './Stats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcicles, faVolumeOff, faFire, faChartBar } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Stats() {
  return (
    <div className='stats'>
  
        <div className="stats-title">Why Custom Loop</div>

      
          <Row>
            <Col>
              <FontAwesomeIcon icon={faChartBar} className="icon"/>
              <div className="col-title">Increased Performance</div>
              
            </Col>
            <Col>
              <FontAwesomeIcon icon={faIcicles} className="icon"/>
              <div className="col-title">Lower Temperatures</div>
            </Col>
            <Col>
              <FontAwesomeIcon icon={faVolumeOff} className="icon"/>
              <div className="col-title">Less Noise</div></Col>
            <Col>
              <FontAwesomeIcon icon={faFire} className="icon"/>
              <div className="col-title">Aesthetics</div>
            </Col>          
          </Row>
       
        
    </div>
  );
}

export default Stats;
