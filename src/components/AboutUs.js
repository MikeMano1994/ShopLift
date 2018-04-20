import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

export default class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Row>
        <h1 className="aboutUsTitle">About Us</h1>
        <p className="aboutusdescription">
          Who are we? ShopLift is a family owned business that later on expanded
          into multiple cities. We focus on selling products which are grown
          locally; therefore, we can guarantee the quality and freshness of each
          good.
        </p>
        <h1 className="meetTeam " >Meet The Team</h1>
        </Row>
        <Row className="team1">
        <Col>
        
          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Juan Marcias
            <div className="teamRole">Product Manager</div>
          </div>
        </Col>

        <Col>

          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Bruce Lin
            <div className="teamRole">Technical Lead</div>
          </div>
        </Col>

        <Col>
          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Nhat Trinh
            <div className="teamRole">Tester</div>
          </div>
        </Col>

        <Col>
          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Jennifer Nguyen
            <div className="teamRole">Documentation</div>
          </div>
        </Col>
      </Row>

      <Row className="team2">
        <Col sm="3" >
          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Truc Vo
            <div className="teamRole">Marketing</div>
          </div>
        </Col>

        <Col sm="3">
          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Alejandro Lopez
            <div className="teamRole">Documentation</div>
          </div>
        </Col>

        <Col sm="3">
          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Tuan Anh Le
            <div className="teamRole">Marketing</div>
          </div>
        </Col>
      </Row>

      </Container>
   
         );
  }
}
