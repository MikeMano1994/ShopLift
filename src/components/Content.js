import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FacebookIcon,FacebookShareButton,
        GooglePlusIcon, GooglePlusShareButton,
        TwitterIcon, TwitterShareButton } from 'react-share';
import order from '../picture/orderonline.png';
import visitus from '../picture/comevisitus.png';
import likeandfollow from '../picture/likeandfollow.png';
import img1 from '../picture/img1.jpg';
import img2 from '../picture/img2.jpg';
import img3 from '../picture/img3.jpg';
import img4 from '../picture/img4.jpg';

import './Content.css';

export default class Content extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const shareUrl = 'https://tuanandtruc.wixsite.com/shopl';
        const title = 'ShopLift';
        return(
            <content className='content'>
            <Container>
            <Row>
              <Col><img src={img1} width = {250} height= {250} alt="img1" /></Col>
              <Col><img src={img2} width = {250} height= {250} alt="img2" /></Col>
              <Col><img src={img3} width = {250} height= {250} alt="img3" /></Col>
              <Col><img src={img4} width = {250} height= {250} alt="img4" /></Col>
            </Row>

            <br></br>
            <br></br>

            <Row>
              <Col xs="6" sm="4">
              <img src={likeandfollow} width = {110} height= {100} alt="likeandfollow" />
              <br></br>

              <p className = "font-style">LIKE & </p>
              <p className = "font-style">FOLLOW</p>
              
              <div className="Demo__container">
                <div className="Demo__some-network">
                  <FacebookShareButton url={shareUrl} quote={title} className="Demo__some-network__share-button">
                  <FacebookIcon size={32} rect />
                  </FacebookShareButton>
                </div>

                <div className="Demo__some-network">
                  <GooglePlusShareButton url={shareUrl} className="Demo__some-network__share-button">
                  <GooglePlusIcon size={32} rect/>
                  </GooglePlusShareButton>
                </div>

                <div className="Demo__some-network">
                  <TwitterShareButton url={shareUrl} title={title} className="Demo__some-network__share-button">
                  <TwitterIcon size={32} rect/>
                  </TwitterShareButton>
                </div>
              </div>

               </Col>

            <Col xs="6" sm="4">
            <img src={order} width = {110} height= {100} alt="order" />
            <br></br>
            <p className = "font-style">ORDER</p>
            <p className = "font-style">ONLINE</p>

            </Col>
            <Col sm="4">
            <img src={visitus}  width = {100} height= {100} alt="visitus" />
            <br></br>
            <p className = "font-style">COME</p>
            <p className = "font-style">VISIT US</p>

            </Col> 
          </Row>
         </Container>

         </content>
        );
    }
}
