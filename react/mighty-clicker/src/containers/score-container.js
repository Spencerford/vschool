import React from "react";
import autoBind from "react-autobind";

import Score from "../components/score";
import Reset from "../components/reset";

class ScoreContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            blueCounter: 100,
            redCounter: 100
        },
        autoBind(this);
    };
    
    click(color){
        if(color === "blue"){
            this.setState({
                blueCounter: this.state.blueCounter + 1,
                redCounter: this.state.redCounter - 1
            }) 
        } else {
            this.setState({
                redCounter: this.state.redCounter + 1,
                 blueCounter: this.state.blueCounter - 1
            });
        };
    };

    reset(){
        this.setState({
            blueCounter: 100,
            redCounter: 100
        })
    }
    
    render(){
        return(
            <div className="container">
                <div className="row"> 
                <div className="col-md-offset-2 col-md-4">  
                <Score  color="blue" counter={this.state.blueCounter} handleClick={this.click}/>
                </div>
                <div className="col-md-4">
                <Score  color="red" counter={this.state.redCounter} handleClick={this.click} />
                </div>
                <div className="row">
                <div className="col-md-12">
                    <Reset handleClick={this.reset}/>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default ScoreContainer;