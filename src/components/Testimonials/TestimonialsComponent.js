import React from 'react';


 const TestimonialsComponent = ({listOfTestimonials,error,}) => {

    return(
        <div id="testimonials-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Designation</th>
                        <th>Avatar</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfTestimonials.map(testimonial=>{
                        return(
                            <tr key={testimonial.name}>
                                <td>{testimonial.location}</td>
                                <td>{testimonial.designation}</td>
                                <td>{testimonial.avatar}</td>
                                <td>{testimonial.message}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TestimonialsComponent