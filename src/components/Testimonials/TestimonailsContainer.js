import React,{useEffect} from 'react'
import {TestimonialsComponent} from './TestimonialsComponent';
import {useDispatch,useSelector} from 'react-redux';
import operations from './duck/operations';


const TestimonialsContainer = () => {

    const dispatch = useDispatch();
    const testimonials = useSelector(state=>state.testimonialsReducer.testimonials);
    const error = useSelector(state=>state.testimonialsReducer.error);

   useEffect(()=>{
        dispatch(operations.fetchTestimonials());
    },[dispatch])

    

    return(
        <div id="testimonials-container">
            <TestimonialsComponent listOfTestimonials={testimonials} error={error} />
        </div>
    )
}

export default TestimonialsContainer