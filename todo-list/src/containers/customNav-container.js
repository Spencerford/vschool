import React from "react";


import NavComponent from "../components/nav.js";

class CustomNav extends React.Component {
    render() {
        let myLinks = [
            {
                text: "Home",
                link: "#"
            },
            {
                text: "List",
                link: "#"
            },
            {
                text: "Goals",
                link: "#"
            },
        ]
        
        return (
            <div>
                <NavComponent brand="Get this shit DONE!" links={myLinks}/>
            </div>
        )
    }
}

export default CustomNav;