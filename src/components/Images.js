import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

import Bread from '../picture/slide/bread.png';
import Pizza from '../picture/slide/pizza.png';
import Steak from '../picture/slide/steak.png';
import Pasta from '../picture/slide/pasta.png';

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
                  <img className='centered' width={1200} height={500} alt="900x500" src={Bread}/>
                </Carousel.Item>

                <Carousel.Item>
                  <img width={1200} height={500} alt="900x500" src={Pizza}/>
                </Carousel.Item>

                <Carousel.Item>
                  <img width={1200} height={500}  alt="900x500" src={Steak} />
                </Carousel.Item>

                <Carousel.Item>
                  <img width={1200} height={300}  alt="900x500" src={Pasta} />
                </Carousel.Item>
              </Carousel>
           </div>
        </div>
      );
    }
}
