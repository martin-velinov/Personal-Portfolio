import actions from './actions';
import {testimonials} from './../../../api/TestimonialsApi';

const fetchTestimonials= (requestParams) => {
    return dispatch => {
        dispatch(actions.fetchTestimonialsRequest(requestParams));
        return testimonials(requestParams)
            .then(result=>{
                dispatch(actions.fetchTestimonialsSuccess(result));
                return result;
            })
            .catch(err=>{
                dispatch(actions.fetchTestimonialsFail(err));
                return err;
            })
    }
}


// eslint-disable-next-line
export default{
    fetchTestimonials,
   
}