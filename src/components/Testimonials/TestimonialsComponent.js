import React from 'react';


 const TestimonialsComponent = ({listOfTestimonials}) => {

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
                    {/* {listOfTestimonials?.map((testimonial,id)=>{
                        return(
                            <tr key={id}>
                                <td>{testimonial.id}</td>
                                <td>{testimonial.name}</td>
                                <td>{testimonial.location}</td>
                                <td>{testimonial.designation}</td>
                                <td>{testimonial.avatar}</td>
                                <td>{testimonial.message}</td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        </div>
    )
}

export default TestimonialsComponent