import React from "react";
import {} from "react-bootstrap";

//import list item
import ListItem from "./list-item.js";

class List extends React.Component {
    genList() {
        return this.props.list.map((item, index) => {
                return (
                    <ListItem item={item} index={index} handleRemove={this.props.handleRemove} handleEdit={this.props.handleEdit}/>
                )
            })
    }

    render() {
        this.genList();
        return (
            <div className="list-item">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-4 col-md-4">
                            <h1>Create a To-Do list!</h1>
                            <input value={this.props.listValue} onChange={this.props.handleInput}/>
                            <button
                                className="btn btn-success"
                                onClick={() => {
                                this.props.handleClick();
                            }}>Add</button>

                        </div>
                        <div className="row">
                            <div className="col-md-offset-2 col-md-6">
                                <ol>
                                    {this.genList()}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default List;