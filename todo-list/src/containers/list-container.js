import React from "react";
import autoBind from "react-autobind";


import List from "../components/list.js";


class ListContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            list: ["hey"],
            listValue: ""
        }
        autoBind(this)
    }
    

    click() {
        this.setState({
            ...this.state,
            list: [...this.state.list, this.state.listValue],
            listValue: ""
        });
     };

    input(event){
        this.setState({
            ...this.state,
            listValue: event.target.value
        });
    };
    
    remove(index) {
         let oldList = [...this.state.list];
         oldList.splice(index, 1);
         this.setState({
             ...this.state,
             list: oldList
         });
     } 

      edit(index) {
        let newItem = prompt("change your list item");
        let oldValue = [...this.state.list];
         oldValue.splice(index, 1, newItem);
         this.setState({
             ...this.state,
             list: oldValue
         });
     } 
     
    render(){
        return(
            <div>
                <List list={this.state.list} handleInput={this.input} handleEdit={this.edit} handleRemove={this.remove} listValue={this.state.listValue} handleClick={this.click}/>
            </div>
        )
    }
}

export default ListContainer;