const initialState = {
    smurfs: [],
    isFetching: false,
    fetchingError: "",
    isPosting: false,
    postingError: "",
    isDeleting: false,
    deletingError: ""
  }
  
export const smurfsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_SMURFS_START":
            return {
                ...state,
                isFetching: true,
                fetchingError: ""
            }
        case "FETCHING_SMURFS_SUCCESS":
            if (action.payload !== state.smurfs) {
                return {
                    ...state,
                    isFetching: false,
                    smurfs: action.payload
                }
            } else {
                return state;
            }
        case "FETCHING_SMURFS_FAILURE":
            return {
                ...state,
                isFetching: false,
                fetchingError: action.payload
            }
        case "POSTING_SMURF_START":
            return {
                ...state,
                isPosting: true,
                postingError: ""
            }
        case "POSTING_SMURF_SUCCESS":
            return {
                ...state,
                isPosting: false,
                postingError: ""
            }
        case "POSTING_SMURF_FAILURE":
            return {
                ...state,
                isPosting: false,
                postingError: action.payload
            }
        case "DELETING_SMURF_START":
            return {
                ...state,
                isDeleting: true,
                deletingError: ""
            }
        case "DELETING_SMURF_SUCCESS":
            return {
                ...state,
                isDeleting: false,
                deletingError: ""
            }
        case "DELETING_SMURF_FAILURE":
            return {
                ...state,
                isDeleting: false,
                deletingError: action.payload
            }
        default:
            return state;
    }
}