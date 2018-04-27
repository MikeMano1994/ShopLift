import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Grid, Thumbnail } from 'react-bootstrap';
import raccoon from '../picture/raccoon.jpg';

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
          <h1 className="meetTeam">Meet The Team</h1>
        </Row>
        <Row className="team1">
          <Grid>
            <Row>
              <Col xs={12} md={4} lg={3}>
                <Thumbnail src="http://placehold.it/150x150" alt="150x150">
                  <h3>Juan Marcias</h3>
                  <p>Product Manager</p>
                  <p>Juan is a cool manager. His tattoo speaks everything.</p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Thumbnail src="http://placehold.it/150x150" alt="150x150">
                  <h3>Bruce Lin</h3>
                  <p>Technical Lead</p>
                  <p>Bruce's hand seems always hold a cup of coffee. Always late.</p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Thumbnail src="http://placehold.it/150x150" alt="150x150">
                  <h3>Nhat Trinh</h3>
                  <p>Tester</p>
                  <p>Nhat: "oh shit."</p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Thumbnail src="http://placehold.it/150x150" alt="150x150">
                  <h3>Jennifer Nguyen</h3>
                  <p>Documentation</p>
                  <p>There are many Jenns in the world. This is a good one.</p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Thumbnail src="http://placehold.it/150x150" alt="150x150">
                  <h3>Alejandro Lopez</h3>
                  <p>Documentation</p>
                  <p>Besides hiking, Alejandro is also the GQ guy in the team.</p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Thumbnail src="http://placehold.it/150x150" alt="150x150">
                  <h3>Truc Vo</h3>
                  <p>Marketing</p>
                  <p>Truc pretends she didn't know much, but she pushed the most code in the front-end team.</p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Thumbnail src="http://placehold.it/150x150" alt="150x150">
                  <h3>Tuan Anh Le</h3>
                  <p>Marketing</p>
                  <p>I am the Tuan.</p>
                </Thumbnail>
              </Col>
              <Col xs={12} md={4} lg={3}>
                <Thumbnail src={raccoon} alt="150x150">
                  <h3>Jack</h3>
                  <p>FullStack Developer</p>
                  <p>I pull. I commit. I push.</p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
        </Row>
      </Container>
    );
  }
}
