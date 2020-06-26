const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
  }
  
export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_SMURFS_START":
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case "FETCHING_SMURFS_SUCCESS":
            //map over data here and set smurfs
        case "FETCHING_SMURFS_FAILURE":
            //set error here
        case "ADD_SMURF":
            //code here
        default:
            return state;
    }
}