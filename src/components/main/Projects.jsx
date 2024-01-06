import React, { PureComponent } from 'react'
import { motion } from 'framer-motion';



class Projects extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
           <motion.div
            variants = {fadeIn('up', 'spring', )}
           >
            <p>My Projects</p>
           </motion.div> 
        )
    }
}

export default Projects