import React from 'react';
import { Row, Col, Alert } from 'reactstrap';

const PopUpAlert = ({ totalResults }) => {
    return <Row style={{paddingTop: '20px',}}>
             <Col sm={{ size: 6, offset: 3 }}>
                <Alert color="success">
                  <h4>We found { totalResults } receipts</h4>
               </Alert>
             </Col>
          </Row>
};

export default PopUpAlert;
