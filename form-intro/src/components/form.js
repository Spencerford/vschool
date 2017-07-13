import React from "react";
import {} from "react-bootstrap";

class Form extends React.Component {
    genNames() {
        this.nameListItems = this
            .props
            .names
            .map((item, index) => {
                return (
                    <li onClick={() => {
                        this.props.handleRemove(index);
                    }} key={item + index}>
                        {item}
                    </li>
                );
            });
    }

    render() {
        this.genNames();
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-offset-5 col-xs-4 col-md-offset-5 col-md-4 content">
                        <h1>{this.props.brand}</h1>
                        <p>Input your Name!</p>
                        <input value={this.props.nameValue} onChange={this.props.handleInput}/>
                        <button className="btn btn-success"
                            onClick={() => {
                            this
                                .props
                                .handleClick();
                        }}>Submit</button>
                        <h3>current Users</h3>
                        <ul>
                            {this.nameListItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
};

export default Form;