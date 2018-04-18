import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class Step1 extends Component{
    render(){
        return(
        <Container>
          <Row>
            <Col xs="6">
            <h2> WELCOME BACK</h2>
            <a href="/login" > 
                    <button type="button" class="btn btn-dark"
                        style = {{marginBottom: '20px',marginTop: '20px' }}>
                        <p>LOG IN</p>
                        </button>
                  </a>
                  <a href="/login" > 
                    <button type="button" class="btn btn-dark"
                        style = {{marginBottom: '20px',marginTop: '20px' }}>
                        <p>LOG IN</p>
                        </button>
                  </a>
       
            </Col>
            

            <Col xs="6">


            </Col>
          </Row>
        </Container>

        );    
    }
}
