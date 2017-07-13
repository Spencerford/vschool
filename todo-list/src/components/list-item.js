import React from "react";
import FontAwesome from "react-fontawesome";

class ListItem extends React.Component {
    render() {
        return (
            <div className="container theRow">
                <div className="row">
                    <li >
                        <h3 className="col-md-4 newList-item">{this.props.item}</h3>

                        <button
                            className=""
                            onClick={() => {
                            this
                                .props
                                .handleRemove(this.props.index)
                        }}>
                            <FontAwesome name="times" size="2x"/>
                        </button>
                        <button
                            className="fontAwesome"
                            onClick={() => {
                            this
                                .props
                                .handleEdit(this.props.index)
                        }}>
                            <FontAwesome name="pencil" size="2x"/>
                        </button>
                    </li>
                </div>
            </div>
        )
    }
}

export default ListItem;