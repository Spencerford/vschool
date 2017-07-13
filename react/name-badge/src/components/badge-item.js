import React from 'react';

//import other component
import Badge from "./badge.js";

class BadgeItem extends React.Component {
    genBadges(){
        return this.props.badges.map((item, index) => {
                return (
                    <Badge key={item + index} item={item} index={index} />
                );
            });
    };
    
    render() {
        return (
            <div>
                {this.genBadges()}
            </div>
        );
    }
}

export default BadgeItem;