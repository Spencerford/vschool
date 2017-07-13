import React from "react";
import EventListener from "react-event-listener";
import ReactAudioPlayer from "react-audio-player";

class Content extends React.Component {

    render() {
        return (
            <div
                className="box"
                style={this.props.style}
                onClick=
                {() => {this.props.handleClick()}}>

                <EventListener
                    target="window"
                    onScroll={() => {
                    this
                        .props
                        .handleScroll();
                }}/>

                <ReactAudioPlayer 
                src="/music/Short-laughing-sound-effect.mp3"
                autoPlay
                />


            </div>
        );
    }
};

export default Content;