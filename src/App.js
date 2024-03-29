import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Blog from './pages/Blog/Blog'
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import NotFound  from './pages/404 Not Found/NotFound';
import './assets/css/Main.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/> 
        <Route path='/blog' element={<Blog/>}/> 
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
