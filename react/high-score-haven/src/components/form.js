import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <input className="col-md-3 form-control" placeholder="Name" type="text"/>
                    <input className="col-md-3 form-control" placeholder="Date" type="date"/>
                    <input className="col-md-3 form-control" placeholder="Game" type="text"/>
                    <input className="col-md-3 form-control" placeholder="Score" type="number"/>
                    <div>
                        <button className="btn btn-success form-control">SUBMIT</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Form;