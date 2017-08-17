import axios from "axios";

export function loadInitChats() {
    return(dispatch) => {
        return axios.get("http://localhost:9000/chat").then((response) => {
            dispatch(setData(response.data.data))
        }).catch((err) => {
            throw err;
        })
    }
}

export function setData(data){
    return {
        type: "SET_DATA",
        data
    }
}

export function addChat(data, socket){
    return(dispatch) => {
        socket.emit("add-chat",data);
    }
}

export function receiveChat(data){
    return {
        type: "RECEIVE_CHAT",
        data
    }
}