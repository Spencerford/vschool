import axios from "axios";

export function loadData(){
    return(dispatch) => {
        return axios.get("http://localhost:8080/music").then((response) => {
            dispatch(setData(response.data.data))
        }).catch((error) => {
            throw error;
        });
    };
};

export function addData(data){
    return(dispatch) => {
        return axios.post("http://localhost:8080/music", data).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        })
    }
}

export function deleteData(id){
    return(dispatch) => {
        return axios.delete(`http://localhost:8080/music/${id}`).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        });
    }
};

export function updateData(id, data){
    return(dispatch) => {
        return axios.put(`http://localhost:8080/music/${id}`, data).then((response) => {
            dispatch(loadData());
        }).catch((error) => {
            throw error;
        });
    }
};

export function setData(data){
    return{
        type: "SET_DATA",
        data
    }
}