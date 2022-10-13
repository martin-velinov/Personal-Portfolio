import constants from "./constants";

const fetchTestimonialsRequest = (requestParams) => {
    return{
        type: constants.GET_TESTIMONIALS_REQUEST,
        payload: requestParams
    }
}

const fetchTestimonialsSuccess = (testimonials) => {
    return{
        type: constants.GET_TESTIMONIALS_SUCCESS,
        payload: testimonials
    }
}

const fetchTestimonialsFail = (error) => {
    return{
        type:constants.GET_TESTIMONIALS_FAIL,
        payload:error
    }
}



// eslint-disable-next-line
export default{
    fetchTestimonialsFail,
    fetchTestimonialsRequest,
    fetchTestimonialsSuccess,
    
}