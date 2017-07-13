import React from 'react';

class Meme extends React.Component {
    render() {
        return (
            <div className="col-md-offset-1 col-md-5 meme-image" style={{backgroundImage: `url(${this.props.url})`}}>
                <p className="top-text text-center">{this.props.top}</p>
                <p className="bottom-text text-center">{this.props.bottom}</p>
            </div>
        );
    }
}

export default Meme;