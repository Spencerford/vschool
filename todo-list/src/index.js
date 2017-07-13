import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import other files
import CustomNav from "./containers/customNav-container";
import ListContainer from "./containers/list-container";
import Header from "./header";


class App extends React.Component{
    render (){
        return(
            <div>
                <CustomNav />
                <Header />
                <ListContainer />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));