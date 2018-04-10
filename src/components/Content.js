import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import {FacebookIcon,FacebookShareButton, 
        GooglePlusIcon, GooglePlusShareButton,
        TwitterIcon, TwitterShareButton} from 'react-share';

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
          <Col xs="6" sm="4">
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
          
          <Col xs="6" sm="4"><p style={{color:'orange', fontWeight:'bold'}}>ORDER ONLINE</p></Col>

          <Col sm="4"><p style={{color:'orange', fontWeight:'bold'}}>COME VISIT US</p></Col>
        </Row>
         </Container>

         </content>
        );
    }
}