const initialState = {
    smurfs: []
  }
  
export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_SMURFS_START":
            //code here
        case "FETCHING_SMURFS_SUCCESS":
            //code here
        case "FETCHING_SMURFS_FAILURE":
            //code here
        case "ADD_SMURF":
            //code here
        default:
            return state;
    }
}