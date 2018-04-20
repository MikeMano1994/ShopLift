import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';

export default class AboutUs extends Component {
  render() {
    return (
      <div >
        <h1 className="aboutUsTitle">About Us</h1>
        <p className="aboutusdescription">
          Who are we? ShopLift is a family owned business that later on expanded
          into multiple cities. We focus on selling products which are grown
          locally; therefore, we can guarantee the quality and freshness of each
          good.
        </p>
        <h1 className="meetTeam col-md-6 col-sm-6 col-lg-4 col-xs-12 col-xl-3" >Meet The Team</h1>

        <div className="team1">
          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Juan Marcias
            <div className="teamRole">Product Manager</div>
          </div>

          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Bruce Lin
            <div className="teamRole">Technical Lead</div>
          </div>

          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Nhat Trinh
            <div className="teamRole">Tester</div>
          </div>

          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Jennifer Nguyen
            <div className="teamRole">Documentation</div>
          </div>
        </div>

        <div className="team2">
          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Truc Vo
            <div className="teamRole">Marketing</div>
          </div>

          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Alejandro Lopez
            <div className="teamRole">Documentation</div>
          </div>

          <div class="item-wrapper">
            <div class="item-content">
              <img src="http://placehold.it/100x100" />
            </div>
            Tuan Anh Le
            <div className="teamRole">Marketing</div>
          </div>
        </div>
      </div>
    );
  }
}
