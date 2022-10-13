export const testimonials = () => {
    return fetch('https://testimonialapi.toolcarton.com/api')
        .then(res => res.json())
        .then(json => Promise.resolve(json)) //json Array(10)
        .catch(err => Promise.reject(err))
} 

