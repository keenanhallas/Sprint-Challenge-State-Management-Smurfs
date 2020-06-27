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
                payload: res.data
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

export const addSmurf = smurf => dispatch => {
    dispatch({
        type: "POSTING_SMURF_START"
    })
    axios.post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log(res);
            dispatch({
                type: "POSTING_SMURF_SUCCESS"
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: "POSTING_SMURF_FAILURE"
            })
        });
}

export const deleteSmurf = smurf => dispatch => {
    console.log("deletingSmurf running")
    dispatch({
        type: "DELETING_SMURF_START"
    })
    axios.delete(`http://localhost:3333/smurfs/${smurf.id}`)
        .then(res => {
            console.log(res);
            dispatch({
                type: "DELETING_SMURF_SUCCESS"
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: "DELETING_SMURF_FAILURE",
                payload: err
            })
        });
}