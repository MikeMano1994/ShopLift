import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    return (
        <div className="card" style={{width: "18em"}}>
            <img className="card-img-top" src="http://placehold.it/286x180" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
  }
}
