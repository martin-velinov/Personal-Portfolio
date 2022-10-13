import mvsolution from '../assets/img/tailwindp.png'
import victoria from '../assets/img/bootstrapp.png'
import vehicle from '../assets/img/nodep.png'
import restaurant from '../assets/img/javascript.png'


export const info = {
    firstName: "Martin",
    lastName: "Velinov",
    initials: "js", 
    position: "a Full Stack Developer", 

    miniBio: 
        {
            name: 'Martin Velinov',
            position: 'FullStack JavaScript Developer',
            desc:"I'm a web developer with passion for making beautiful UIs and taking bussinesses to the next level"
        },
        
    
    socials: [
        
        {
            link: "https://www.instagram.com/m.velinov/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/martin-velinov",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/martin-velinov-796815162/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        

    ],
   
    skills:
        {   fluentWith: ['html', 'css', 'sass', 'bootstrap','tailwindCSS'],
            experiencedWith: ['javascript', 'react', 'git', 'github', 'nodejs', 'mongodb',],
            familiarWith: ['sql', 'typescript', 'figma']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'basketball',
            emoji: ':basketball:'
            
        }

    ],
    portfolio: [ 
        {
            title: "MV Solutions",
            live: "https://mv-solutions.netlify.app/",
            source: "https://github.com/martin-velinov/TailwindCSS-Landing-Page",
            stack:"html, tailwindCSS, Javascript",
            image:mvsolution
        },
        {
            title: "Victoria Hotels",
            live: "https://victoria-hotels.netlify.app/",
            source: "https://github.com/martin-velinov/Bootstrap-Website",
            stack:"html, bootstrap, Javascript",
            image:victoria
        },
        {
            title: "Vehicle Informer",
            live: "https://vehicleinformer.onrender.com/",
            source: "https://github.com/martin-velinov/VehicleInformer-NodeApi",
            stack:"node.js, express.js, mongodb",
            image:vehicle
        },
        {
            title: "Restaurant Landing Pag",
            live: "https://martin-velinov.github.io/Landing-page-HTML-CSS-JS/",
            source: "https://github.com/martin-velinov/Landing-page-HTML-CSS-JS",
            stack:"html, CSS, Javascript",
            image:restaurant
        }
        
        
    ],
    blogSection : {
        title: "Blogs",
        subtitle:
          "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
        displayMediumBlogs: "true", 
        blogs: [

          {
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
              "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
          },
          {
            title: "Why REACT is The Best?",
            description:
              "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
          }
        ],
        display: true 
    }
   
}