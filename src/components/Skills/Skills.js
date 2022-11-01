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
import sql from '../../assets/img/sql.png'

const Skills = () => {
  return (
    <div className='skills-wrapper'>
      <h2>My skills include</h2>
      <div className="skills">
        <div className="skill">
          <p>HTML</p>
          <img src={html} alt="" />
        </div>
        <div className="skill">
          <p>CSS</p>
          <img src={css} alt="" />
        </div>
        <div className="skill">
          <p>Bootstrap</p>
          <img src={bootstrap} alt="" />
        </div>
        <div className="skill">
          <p>TailwindCSS</p>
          <img src={tailwind} alt="" />
        </div>
        <div className="skill">
          <p>JavaScript</p>
          <img src={js} alt="" />
        </div>
        <div className="skill">
          <p>React</p>
          <img src={react} alt="" />
        </div>
        <div className="skill">
          <p>Node</p>
          <img src={node} alt="" />
        </div>
        <div className="skill">
          <p>MongoDB</p>
          <img src={mongo} alt="" />
        </div>
        <div className="skill">
          <p>MySQL</p>
          <img src={sql} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Skills