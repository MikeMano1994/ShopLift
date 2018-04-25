import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

import Bread from '../picture/slide/bread.jpg';
import Pizza from '../picture/slide/pizza.jpg';
import Steak from '../picture/slide/steak.jpg';
import Pasta from '../picture/slide/pasta.jpg';

export default class Slider extends Component {
  constructor(props){
      super(props);
      this.state={};
  }

  render(){
    return(
      <div>
        <div className='carouselWrapper container' style={{width:'800', height:'400'}}>
          <Carousel>
            <Carousel.Item>
              <a href="javascript:window.open('https://chocolatechocolateandmore.com/chocolate-filled-pastry/');">
                <img className='centered' width={1200} height={500} alt="900x500" src={Bread} />
              </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href="javascript:window.open('https://www.tasteofhome.com/recipes/homemade-pizza');">
                <img width={1200} height={500} alt="900x500" src={Pizza} />
              </a>
            </Carousel.Item>

            <Carousel.Item>
             <a href="javascript:window.open('https://www.bonappetit.com/recipe/black-pepper-crusted-wagyu-new-york-steaks-with-black-truffle-vinaigrette');">
                <img width={1200} height={500}  alt="900x500" src={Steak} />
             </a>
            </Carousel.Item>

            <Carousel.Item>
              <a href="javascript:window.open('http://www.myrecipes.com/recipe/seafood-fettuccine');">
                <img width={1200} height={300}  alt="900x500" src={Pasta} />
              </a>
            </Carousel.Item>
          </Carousel>
       </div>
    </div>
   );
  }
}
