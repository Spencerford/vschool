import React, { Component } from 'react';

class Article extends Component {
    render() {
        
        return (
            <div>
                <h2>t{this.props.article.name}</h2>
                <p>{this.props.article.text}</p>
                
            </div>
        );
    }
}

export default Article;