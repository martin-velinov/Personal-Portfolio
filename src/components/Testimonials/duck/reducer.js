import constants from "./constants";

const initialState = {
    testimonials: [],
    error: undefined,
    // isLoading:false
}

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case constants.GET_TESTIMONIALS_REQUEST:
            return {
                ...state,
                // isLoading:true
            }
        case constants.GET_TESTIMONIALS_SUCCESS:
            return {
                ...state,
                testimonials: action.payload,
                //isLoading:false
            }
        case constants.GET_TESTIMONIALS_FAIL:
            return {
                ...state,
                error: action.payload
                //isLoading:false
            }
        
        default: return state;
    }
}