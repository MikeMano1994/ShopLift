//Spinner Docs: http://indigojs.github.io/bootstrap-spinner/

import React, { Component } from 'react';
import {Button, Modal } from 'react-bootstrap';

export default class Item extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
    return (
        <div className="card">
            <img className="card-img-top" src={this.props.a.image} alt="Card image cap" onClick={this.handleShow}/>
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
                    <a href="#" className="btn btn-outline-success my-2 my-sm-0">Add To Cart</a>
                </div>
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <Modal.Title>{this.props.a.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <img src={this.props.a.image}/>
                            <div>
                                {/*<h4 className="modal-card-title">{this.props.a.name}</h4>*/}
                                <p>
                                    {this.props.a.description}
                                </p>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
  }
}


