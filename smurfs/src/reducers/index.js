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
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case "FETCHING_SMURFS_FAILURE":
            //set error here
        case "ADD_SMURF":
            //code here
        default:
            return state;
    }
}