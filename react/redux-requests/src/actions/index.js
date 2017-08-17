import axios from "axios";

export function loadColor() {
    return (dispatch) => {
        return axios.get("http://www.colr.org/json/color/random").then((response) => {
            dispatch(genColor("#" + response.data.new_color));
            dispatch(changeColorName(response.data.colors[0].tags[0]))
        });
    }
}


export function genColor(color){
    return {
        type: "CHANGE_COLOR",
        color
    }
};

export function changeColorName(name){
    return {
        type: "COLOR_NAME",
        name: name
    }
}