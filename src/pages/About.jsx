import React from 'react';
import { Chrono } from 'react-chrono';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import '../styles/About.css';
import { ritchie } from '../assets';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences,education } from '../constants';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
  contentStyle={{background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  iconStyle={{background: experience.iconBg}}
  icon = {
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', width: '100%', height: '100%'}}>
      <img 
      src={experience.icon} 
      alt={experience.company_name} 
      style={{width: '40px', height: '40px', objectFit: 'contain'}}
      />
    </div>
  }
  date={ experience.date }
  >
    <div style={{height:'100%', display: 'flex', flexDirection: 'column'}}>
      <h5 className='vertical-timeline-element-title'>{experience.title}</h5>
      <p className='text-secondary'>{experience.company_name}</p>
      <ul className='experience_points'>
        {(experience.points).map((point, index) => (
          <li 
          key={`experience-point-${index}`}
          className='points'
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
    
  </VerticalTimelineElement>
  )
} 

const About = () => {
  
  return (
    <div id='about' className='about'>
      <motion.section
       className='meIntro'
       
      initial="hidden"
      animate="show"
      variants={fadeIn('up','spring',0.7,1.2,document.getElementsByClassName('meIntro').clientHeight+10,0,1)}
     
      >
        <div className='imgncap'>
          <img className="myphoto" src={ritchie} alt="ritchie" />Richard Muchiri
          <ul className='courses'>
          <li>BSc. Mechanical Engineering</li>
          <li>Dip. Software Engineering</li>
        </ul>
        
        </div>
        
        <p>
          <q>
          To uphold creativity, invention, and innovation that would lead to life solutions and better production in-line with demand and prevailing economic situations
        </q>
        </p>
      </motion.section>
      <motion.section className='experience'>
        <h4>Work Experience</h4>
          <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}
        
      </VerticalTimeline>

      </motion.section>

      <motion.section className='education'>
        <h4>Education</h4>

        <div><Chrono items={education} /></div>
        
      </motion.section>
    </div>
  );
};

export default About;