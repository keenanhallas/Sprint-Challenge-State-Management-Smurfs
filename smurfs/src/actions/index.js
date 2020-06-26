import axios from "axios";

export const getSmurfs = () => dispatch => {
    dispatch({
        type: "FETCHING_SMURFS_START"
    })
    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}