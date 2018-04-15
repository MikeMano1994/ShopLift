import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

import Bread from '../picture/slide/bread.png';
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
            <div className='carouselWrapper container' style={{width:'800',height:'400'}}>
              <Carousel>
                <Carousel.Item>
                  <img className='centered' width={1200} height={500} src={Bread}/>
                </Carousel.Item>

                <Carousel.Item>
                  <img width={1200} height={500} alt="900x500" src={Pizza}/>
                  <Carousel.Caption>
                    <h3>Pizza with Black Olive and Pepperoni</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img width={1200} height={500}  alt="900x500" src={Steak} />
                  <Carousel.Caption>
                    <h3>Wagyu Steak</h3>
                  </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                  <img width={1200} height={500}  alt="900x500" src={Pasta} />
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
