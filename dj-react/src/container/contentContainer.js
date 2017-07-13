import React from "react";
import autoBind from "react-autobind";
import Content from "../component/content.js";


class ContentContainer extends React.Component{
    constructor(){
        super();
            this.state={
                style: {
                    height: "250px",
                    width: "250px",
                    backgroundColor: "green",
                    paddingTop: "50px"
                }
            };
        autoBind(this);
        
    };

    click (){
        this.setState({
            style: {
                ...this.state.style,
                backgroundColor: "crimson",
                borderRadius: "50%"
            }
        })

    };
    scroll (){
        this.setState({
            style: {
                ...this.state.style,
                transform: "rotate(40deg)",
                backgroundColor: "purple"
            }
        })   
    };
    render (){
        return (
            <div>
                
                <Content style={this.state.style} handleClick={this.click} handleScroll={this.scroll}/>
            </div>
        )
    }
}

export default ContentContainer;