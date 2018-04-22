import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

export default class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state={
            currentCategory: 'All'
        };
    }

    componentWillMount(){
        this.setState({currentCategory: this.props.currentCategory});
    }

    render(){
        // Beverage, Drinks, Frozen Food, Snacks, Meats, Produce
        return(
        <ul className = "sidebar">
            <h2 className = "shop">Categories</h2>
            <Button onClick={()=>{
                this.props.setCategory({currentCategory:"Beverage"});
            }}/>
        </ul>
        );
    }   
}