import React from "react";
import Form from "../components/form.js";
import autoBind from "react-autobind";

class FormContainer extends React.Component{
    constructor(){
            super();
            this.state = {
                names: ["spencer", "Jacob", "kacie"],
                nameValue: ""
            }
            autoBind(this);
        };
     input(event){
        this.setState({
            ...this.state,
            nameValue: event.target.value
        })
     }
     
     click() {
        this.setState({
            ...this.state,
            names: [...this.state.names, this.state.nameValue],
            nameValue: ""
        })
     }
     remove(index) {
         let oldNames = [...this.state.names];
         oldNames.splice(index, 1);
         this.setState({
             ...this.state,
             names: oldNames
         });
     }  
    
    render (){
        return (
            <div>
                <Form handleRemove={this.remove} nameValue={this.state.nameValue} handleInput={this.input} brand="Join Us" names={this.state.names} handleClick={this.click}/>
            </div>
        );
    };
};

export default FormContainer; 