import React, { Component } from 'react';

import Blog from "../components/blog.js";

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

class BlogContainer extends Component {

    render() {
        return (
            <Blog articles={articles}/>
        );
    }
}

export default BlogContainer;