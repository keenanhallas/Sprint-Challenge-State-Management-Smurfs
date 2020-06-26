import axios from "axios";

export const getSmurfs = () => dispatch => {
    dispatch({
        type: "FETCHING_SMURFS_START"
    })
    axios.get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res);
            dispatch({
                type: "FETCHING_SMURFS_SUCCESS",
                payload: res.data.smurfs
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: "FETCHING_SMURFS_FAILURE",
                payload: err
            })
        })
}