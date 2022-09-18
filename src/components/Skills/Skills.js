import React from 'react'
import './Skills.css'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import bootstrap from '../../assets/img/bootstrap.png'
import tailwind from '../../assets/img/tailwind.png'
import js from '../../assets/img/js.png'
import react from '../../assets/img/react.png'
import node from '../../assets/img/node.png'
import mongo from '../../assets/img/mongo.png'


const Skills = () => {
  return (
    <div className='skills-wrapper'>
      <h2>My skills include</h2>
      <div className="skills">
        <div className="skill">
          <p>html</p>
          <img src={html} alt="" />
        </div>
        <div className="skill">
          <p>css</p>
          <img src={css} alt="" />
        </div>
        <div className="skill">
          <p>bootstrap</p>
          <img src={bootstrap} alt="" />
        </div>
        <div className="skill">
          <p>tailwind</p>
          <img src={tailwind} alt="" />
        </div>
        <div className="skill">
          <p>js</p>
          <img src={js} alt="" />
        </div>
        <div className="skill">
          <p>react</p>
          <img src={react} alt="" />
        </div>
        <div className="skill">
          <p>node</p>
          <img src={node} alt="" />
        </div>
        <div className="skill">
          <p>mongo</p>
          <img src={mongo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skills