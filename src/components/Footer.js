import React, {Component} from 'react';


export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const shareUrl = 'https://tuanandtruc.wixsite.com/shopl';
        const title = 'ShopLift';
        return(
            <footer class='footer'>

                <p>© Copyright 2018 by ShopLift.</p>

            </footer>
        );
    }
}