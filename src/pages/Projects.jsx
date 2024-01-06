import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/Project.css';
import { fadeIn } from '../utils/motion';
import { projects } from '../constants';
import { Tilt } from 'react-tilt';
import { technologies } from '../constants';
import { BallCanvas } from '../components/canvas';

import { mechbckg } from '../assets';
import { softbckg } from '../assets';

  const ProjectsCard = ({name, index, id, image}) => {
    return(
    <Tilt options={{
      reverse: true,
      max: 20,
      perspective: 500,
      scale: 1.05,
      transition: true,
      axis: null,
      reset: true,
      easing: "cubic-bezier(.03, .98, .52, .99)"
    }} className="projectCard"
    >
      <motion.div 
      initial = 'hidden'
      animate = 'show'
      variants={fadeIn('left','spring',0.5 * index,0.75)}
      style={{minWidth: '290px'}}
      >
        <h4>{name}</h4>
        <img style={{width: '250px', height: '250px', borderRadius: '10px'}} src={image} alt={name} />
      </motion.div>
    </Tilt>
  );

  }

const Projects = () => {

  const showStyle = { display: 'inline' };
  const showcolStyle = { display: 'flex', flexDirection: 'column' };
  const hiddenStyle = { display: 'none', visibility: 'collapse' };
  const endAlign = {alignSelf: 'end'};
  const startAlign = {alignSelf: 'start'};
  const centerAlign = {alignSelf: 'center'};

  const [hovered, setHovered] = useState("");

  return (
    <div className='project'
    onScroll={() => setHovered(hovered)}
    >
      <section id='intro' className='intro'>
      <AnimatePresence>
        <motion.div className='mech'
          key={"mech"}
          initial="hidden"
          style={{backgroundImage: 'url('+mechbckg+')'}}
          animate={hovered === "soft" ? "hidden" : hovered === "mech" ? "expand" : "show" } 
          variants={
            fadeIn("left", "spring", 0.5, 1.5, document.getElementsByClassName('mech').clientWidth+10, 0.5, 1)
            }
            onScroll={() => {console.log('scroll'); hovered == "" ? setHovered("mech"): setHovered("")}}
          onMouseDown={() => {console.log('clicked'); hovered == "" ? setHovered("mech"): setHovered("")}}
          onPointerEnter={() => setHovered("mech")}
          onPointerLeave={() => setHovered("")}
        >
          <h2 style={hovered === "mech" ? centerAlign : endAlign}>Mech<span style={hovered === "mech" ? showStyle : hiddenStyle}>anical</span></h2>
          <h3 style={hovered === "mech" ? centerAlign : endAlign}>Engin<span style={hovered === "mech" ? showStyle : hiddenStyle}>eering</span></h3>
        </motion.div>

      <motion.div className='soft'
        key={"soft"}
          initial="hidden" 
          animate={
            hovered === "mech" ? 
            "hidden" : 
            hovered === "soft" ? 
            "expand" : 
            "show" 
          } 
          style={{backgroundImage: 'url('+softbckg+')'}}
          variants={fadeIn("left", "spring",0.5,1.5, document.getElementsByClassName('soft').clientWidth+10, 0.5, 1)
            }
          onClick={() => {hovered == "" ? setHovered("soft"): setHovered("")}}
          onPointerEnter={() => setHovered("soft")}
          onPointerLeave={() => setHovered("")}
          
        >
          <h2 style={hovered === "soft" ? centerAlign : startAlign}><span style={hovered === "soft" ? showStyle : hiddenStyle}>Soft</span>ware</h2>
          <h3 style={hovered === "soft" ? centerAlign : startAlign}><span style={hovered === "soft" ? showStyle : hiddenStyle}>Engin</span>eering</h3>
        </motion.div>
      </AnimatePresence>
      <div className='scrollme' id='scrollme' style={hovered !== "" ? {display: 'flex'} : hiddenStyle}onHoverStart={() => setHovered(hovered)}>
        <motion.div
        animate = {{
          y: [0, 25, 0]
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        >

        </motion.div>
      </div>
      </section>

      <motion.section className='myProjs' style={hovered !== "" ? {display: 'flex', flexDirection: 'column', justifyContent: 'start'} : hiddenStyle}
      onHoverStart={() => setHovered(hovered)}>
        
      <motion.div className='project_cont'>
        <h2>Projects</h2>
        <p>The projects potray real life scenarios that I have worked on. They best desctibe my skills and professionalism.</p>
      <div className='projects' style={hovered !== "" ? {display: 'flex'} : hiddenStyle}>
        {/* <motion.div> */}
         {projects.map((project, index) => (
            <ProjectsCard key={`proj-${index}`} index={index} {...project}/>
          ))}
         
      </div>

      </motion.div>
         
      <motion.div className="showballs">
            {technologies.map((technology) => (
            <div className="ball" key={technology.name}>
              <BallCanvas icon={technology.icon}/>
              </div>
            ))}
          </motion.div>

      </motion.section>
      
    </div>
    
  );
};

export default Projects;