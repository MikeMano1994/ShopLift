import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
//import PopItems from './PopItems';
import Content from './Content';
import Images from './Images';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
          <div>
            <Images/>
              <br></br>
              <br></br>
            <Content/>
          </div>
        );
    }
}
