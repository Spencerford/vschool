import React from "react";
import FontAwesome from "react-fontawesome";
import {Button, buttonToolbar} from "react-bootstrap";
import Articles from "./articles.js";

class Content extends React.Component {
    alertText(desc){
        alert(`This article is about ${desc}`);
    };
    
    render() {
        let articles = this.props.articles.map((item) => {
            return <Articles handleDescription={this.alertText} name={item.name} desc={item.desc} date={item.date}/>
        });
        return ( 
            <div>
                <div className="content container text-left">
                    {articles}
                </div>
                
                <buttonToolbar className="col-md-offset-3 col-md-6">
                    <Button className="content-button" bsSize="large">Older Posts</Button>
                </buttonToolbar>
                
            </div>
        )
    }
};

export default Content;