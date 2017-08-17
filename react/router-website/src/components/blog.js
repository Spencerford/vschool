import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Blog extends Component {
    genArticleLinks() {
        return this.props.articles.map((item, index) => {
            return <div><Link key={item.name + index} to={`/article/${index}`}>{item.name}</Link></div>
        });
    }

    render() {
        return (
            <div>
                <p>This is a very cool blog</p>
                <div>
                    {this.genArticleLinks()}
                </div>
            </div>
        );
    }
}

export default Blog;