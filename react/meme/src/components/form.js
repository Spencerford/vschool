import React from 'react';

class Form extends React.Component {
    render() {
        
        return (
            <div className="col-md-5 form-custom">
                <input onChange={(event) => {
                    this.props.handleChange("top", event)
                }} value={this.props.info.top} placeholder="Top Text" type="text"/>
                <input onChange={(event) => {
                    this.props.handleChange("url", event)
                }} value={this.props.info.url} placeholder="URL" type="text"/>
                <input onChange={(event) => {
                    this.props.handleChange("bottom", event)
                }} value={this.props.info.bottom} placeholder="Bottom Text" type="text"/>
                <button onClick={() => {
                    this.props.handleClick(this.props.info);
                }} className="btn btn-success form-control">Make My Meme</button>
            </div>
        );
    }
}

export default Form;