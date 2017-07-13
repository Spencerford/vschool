import React, {Component} from 'react';
import autoBind from "react-autobind";

//import badge
import BadgeItem from "../components/badge-item.js";

class BadgeContainer extends React.Component {
    constructor(){     
        super();     
        this.state = {
                badges: [],
                currentBadge: {
                    firstName: "",
                    email: "",
                    phone: "",
                    lastName: "",
                    placeOfBirth: "",
                    favoriteFood: "",
                    tellUs: ""
                },
             };     
        autoBind(this);
        
    };

    handleInput(key, event){
        let newBadge = {...this.state.currentBadge};
        newBadge[key] = event.target.value;
        this.setState({
            ...this.state,
            currentBadge: newBadge
        });
    };

    getValue(key) {
        return this.state.currentBadge[key];
    };


    click() {
        let length = true;
        let smallKey = "";
        
        for(let key in this.state.currentBadge){
            if(this.state.currentBadge[key].length < 3){
                length = false;
                smallKey = key
                break;
            } else {
                length = true;
            }
        }
        if(length == true){
            let newBadge = {...this.state.currentBadge};
            for(let key in newBadge){
                newBadge[key] = ""
            }
            this.setState({
                ...this.state,
                badges: [...this.state.badges, this.state.currentBadge],
                currentBadge: newBadge
        });
       
        } else {
            alert(`Please put more than two letters in ${smallKey}`);
        }
    };
    
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 main-input">
                        <div className="col-md-5 left-input">
                            <input value={this.getValue("firstName")} onChange={(event) => {this.handleInput("firstName", event)}} className="col-md-12" placeholder="First Name" type="text"/>
                            <input value={this.getValue("email")} onChange={(event) => {this.handleInput("email", event)}} className="col-md-12" placeholder="Email" type="email"/>
                            <input value={this.getValue("phone")} onChange={(event) => {this.handleInput("phone", event)}} className="col-md-12" placeholder="Phone" type="number"/>
                        </div>
                        <div className="col-md-offset-1 col-md-5">
                            <input value={this.getValue("lastName")} onChange={(event) => {this.handleInput("lastName", event)}} className="col-md-12" placeholder="Last Name" type="text"/>
                            <input value={this.getValue("placeOfBirth")} onChange={(event) => {this.handleInput("placeOfBirth", event)}} className="col-md-12" placeholder="Place of Birth" type="text"/>
                            <input value={this.getValue("favoriteFood")}  onChange={(event) => {this.handleInput("favoriteFood", event)}} className="col-md-12" placeholder="Favorite Food" type="text"/>
                        </div>
                        <div className="col-md-12">
                            <input value={this.getValue("tellUs")}  onChange={(event) => {this.handleInput("tellUs", event)}} className="col-md-11 bio" placeholder="Tell us about yourself" type="text"/>
                        </div>
                        <div className="col-md-offset-5 col-md-4">   
                        <button onClick={() => {this.click()}} className="submit-button">Submit</button>
                        </div>
                    </div>
                </div>
                <div>
                    <BadgeItem badges={this.state.badges} />
                </div>
            </div>
        );
    }
}

export default BadgeContainer;