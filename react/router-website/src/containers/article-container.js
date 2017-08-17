import React, { Component } from 'react';

import Article from "../components/article"

let articles = [
    {
        name: "hey this is neat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia mollitia ratione harum aliquam minus, omnis ex et molestias quos magnam voluptatum eaque, consequuntur a aut placeat voluptate nisi! Excepturi, deserunt."
    },
    {
        name: "hey this is another cool title",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia mollitia ratione harum aliquam minus, omnis ex et molestias quos magnam voluptatum eaque, consequuntur a aut placeat voluptate nisi! Excepturi, deserunt."
    },
    {
        name: "fake news",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia mollitia ratione harum aliquam minus, omnis ex et molestias quos magnam voluptatum eaque, consequuntur a aut placeat voluptate nisi! Excepturi, deserunt."
    }
]

class ArticleContainer extends Component {

    render() {
        let index = this.props.match.params.index
        return (
            <Article article={articles[index]}/>
        );
    }
}

export default ArticleContainer;