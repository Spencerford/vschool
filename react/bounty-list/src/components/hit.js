import React, {Component} from 'react';

class Hit extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-12" style={{display: this.props.input.edit ? "none" : "inherit"}}>
                    <p className="col-md-offset-2 col-md-2">{this.props.hit.name}</p>

                    <p className="col-md-2">{this.props.hit.location}</p>

                    <p className="col-md-2">${this.props.hit.price}</p>

                    <p className="col-md-2">{this.props.hit.wanted}</p>

                    <button className="btn btn-danger"
                        onClick={() => {
                        this
                            .props
                            .handleRemove(this.props.hit.id)
                    }}>Terminated</button>
                </div>
                <div className="col-md-12 text-center">
                    <input style={{display: this.props.input.edit ? "inherit" : "none"}}
                        value={this.props.input.name}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("name", event);
                    }}
                        placeholder="edit name" type="text"/>
                    <input style={{display: this.props.input.edit ? "inherit" : "none"}}
                        value={this.props.input.location}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("location", event);
                    }}
                        placeholder="edit location" type="text"/>
                    <input style={{display: this.props.input.edit ? "inherit" : "none"}}
                        value={this.props.input.price}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("price", event);
                    }}
                        placeholder="edit price" type="text"/>
                    <input style={{display: this.props.input.edit ? "inherit" : "none"}}
                        value={this.props.input.wanted}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("wanted", event);
                    }}
                        placeholder="edit wanted" type="text"/>
                    <button style={{display: this.props.input.edit ? "inherit" : "none"}} 
                        onClick={() => {
                        this
                            .props
                            .handleUpdate(this.props.hit.id, this.props.input);
                            this.props.toggleEdit();
                    }}>Save
                    </button>

                    <button onClick={() => {
                        this.props.toggleEdit();
                    }}>Toggle Edit</button>
                </div>
            </div>

        );
    }
}

export default Hit;