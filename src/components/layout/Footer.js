import React, {Component} from 'react';

export default class Footer extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        let footerStyle={
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "60px", /* Set the fixed height of the footer here */
            lineHeight: "60px", /* Vertically center the text there */
        };
        
        return(
            <footer class='footer centered' style={footerStyle}>
                <div>
                    <span>&reg; 2018 Shoplift Team</span>
                </div>
            </footer>
        );
    }
}