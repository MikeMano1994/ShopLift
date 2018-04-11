// https://github.com/nygardk/react-share

import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {FacebookIcon,FacebookShareButton, 
        GooglePlusIcon, GooglePlusShareButton,
        TwitterIcon, TwitterShareButton} from 'react-share';
import order from '../picture/orderonline.png';
import visitus from '../picture/comevisitus.png';
import likeandfollow from '../picture/likeandfollow.png';
import img1 from '../picture/img1.jpg';
import img2 from '../picture/img2.jpg';
import img3 from '../picture/img3.jpg';
import img4 from '../picture/img4.jpg';

export default class Content extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const shareUrl = 'https://tuanandtruc.wixsite.com/shopl';
        const title = 'ShopLift';
        return(
            <content class='content'>
            <Container>
            <Row>
              <Col><img src={img1} width = {250} height= {250} alt="img1" /></Col>
              <Col><img src={img2} width = {250} height= {250} alt="img2" /></Col>
              <Col><img src={img3} width = {250} height= {250} alt="img3" /></Col>
              <Col><img src={img4} width = {250} height= {250} alt="img4" /></Col>
            </Row>           
           
            <Row>
              <Col xs="6" sm="4">
              <img src={likeandfollow} width = {110} height= {100} alt="likeandfollow" />

              <p style={{color:'orange', fontWeight:'bold'}}>LIKE & FOLLOW</p>

                <div style={{textAlign: 'center'}} >
                    <FacebookShareButton url={shareUrl} quote={title}>
                    <FacebookIcon size={40} round />
                    </FacebookShareButton>
                  
                    <GooglePlusShareButton url={shareUrl}>
                    <GooglePlusIcon size={40} round = {true}/>
                    </GooglePlusShareButton>

                    <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={40} round/>
                    </TwitterShareButton>
                </div>

               </Col>
          
            <Col xs="6" sm="4">
            <img src={order} width = {110} height= {100} alt="order" />
            <p style={{color:'orange', fontWeight:'bold'}}>ORDER ONLINE</p>


            </Col>
            <Col sm="4">
            <img src={visitus}  width = {100} height= {100} alt="visitus" />
            <p style={{color:'orange', fontWeight:'bold'}}>COME VISIT US</p>

            </Col>
          </Row>
         </Container>

         </content>
        );
    }
}