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
            title: 'I help bussiness reach their next level through building exquisite web solutions',
            p1: 'Having online presence in todays age is a must, let me help you scale you bussiness with outstanding web app.',
            p2:"I'm a web developer with passion for making beautiful UIs and giving awesome products the audience they deserve."
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
            image:mvsolution,
            live: "https://mv-solutions.netlify.app/",
            source: "https://github.com/martin-velinov/TailwindCSS-Landing-Page",
            stack:"HTML, TailwindCSS, Javascript"
            
        },
        {
            title: "Victoria Hotels",
            image:victoria,
            live: "https://victoria-hotels.netlify.app/",
            source: "https://github.com/martin-velinov/Bootstrap-Website",
            stack:"HTML, Bootstrap, Javascript"
            
        },
        {
            title: "Vehicle Informer",
            image:vehicle,
            live: "https://vehicleinformer.onrender.com/",
            source: "https://github.com/martin-velinov/VehicleInformer-NodeApi",
            stack:"Node.js, Express.js, Mongodb"
            
        },
        {
            title: "Restaurant Landing Pag",
            image:restaurant,
            live: "https://martin-velinov.github.io/Landing-page-HTML-CSS-JS/",
            source: "https://github.com/martin-velinov/Landing-page-HTML-CSS-JS",
            stack:"HTML, CSS, Javascript"
            
        }
        
        
    ],
    blogSection : {
        title: "Blogs",
        subtitle:
          "With Love for Developing cool stuff, I love to write and teach others what I have learned.",
        
        blogs: [

          {
            title: "MERN stack from the Beginning",
            description:
              "Do you want to lean the MERN stack? then follow this quick quide"
          },
          {
            title: "Why REACT is The Best?",
            description:
              "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
          },
          {
            title: "No-relational databases, and why you might like them",
            description:
              "You've might already heard about a database named MongoDD that's very developer friendly, especially javascript developers.."
          },
          {
            title: "CSS is not hard",
            description:
              "Countrary to popular belief, CSS is not hard to learn well, you just need to have patience"
          }
        ],
        display: true 
    }
   
}