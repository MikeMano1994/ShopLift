//Spinner Docs: http://indigojs.github.io/bootstrap-spinner/

import React, { Component } from 'react';

export default class Item extends Component {

    constructor(props){
        super(props);
    }
  render() {
    return (
        <div className="card">
            <img className="card-img-top" src={this.props.a.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.a.name}</h5>
                    <p className="card-price">${this.props.a.price}/ea.</p>
                    <p className="card-text">{this.props.a.description}</p>
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-default" data-value="decrease" data-target="#spinner" data-toggle="spinner">
                                <span className="glyphicon glyphicon-minus"></span>
                            </button>
                        </span>
                        <input type="text" data-ride="spinner" id="spinner" className="form-control input-number" value="1" width="50%"/>
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default" data-value="increase" data-target="#spinner" data-toggle="spinner">
                                    <span className="glyphicon glyphicon-plus"></span>
                                </button>
                            </span>
                    </div>
                    <a href="#" className="btn btn-primary">Add To Cart</a>
                </div>
        </div>
    )
  }
}


