import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
//import PopItems from './PopItems';

import Bread from '../picture/slide/bread.jpg';
import Pizza from '../picture/slide/pizza.jpg';
import Steak from '../picture/slide/steak.jpg';
import Pasta from '../picture/slide/pasta.jpg';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
          <div>
            <div className='carouselWrapper container' style={{width:'1000',height:'500'}}>
              <Carousel>
                <Carousel.Item>
                  <img className='centered' width={3000} height={1500} alt="900x500" src={Bread}/>
                  <Carousel.Caption>
                    <h3>Stuffed Bread Roll</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img width={3000} height={1500} alt="900x500" src={Pizza}/>
                  <Carousel.Caption>
                    <h3>Pizza with Black Olive and Pepperoni</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img width={3000} height={1500} alt="900x500" src={Steak} />
                  <Carousel.Caption>
                    <h3>Wagyu Steak</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img width={3000} height={1500} alt="900x500" src={Pasta} />
                  <Carousel.Caption>
                    <h3>Italian Pasta</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
           </div>
        </div>
      );
    }
}
