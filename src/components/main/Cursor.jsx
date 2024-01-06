import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import React, { useEffect, useState } from 'react';
import { texts } from '../../constants';

const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: 'linear',
            times: [0, 0.5, 0.5, 1]
        }
    }
};

const CursorBlinker = () => {
    return (       
        <motion.div
        variants = {cursorVariants}
        animate = 'blinking'
        className = 'cursor'
        />
        
    )
}

const Cursor = () => {
    const [ current, setCurrent ] = useState(0);
    const textIndex = useMotionValue(0);
    const count = useMotionValue(0);
    const baseText = useTransform(textIndex, (latest) => texts[latest].name || "");
    const updatedThisRound = useMotionValue(true);
    const rounded = useTransform(count, (latest) =>  Math.round(latest));
    const displayText = useTransform(rounded, (latest) => baseText.get().slice(0, latest));
    
    useEffect(() => {
        const controls = animate(count, 60, {
            type: 'tween',
            duration: 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1.2,
            onUpdate(latest) {
                if (updatedThisRound.get() === true && latest > 0) {
                    updatedThisRound.set(false);
                } else if (updatedThisRound.get() === false && latest === 0) {
                    if (textIndex.get() === texts.length - 1) {
                        textIndex.set(0);
                    } else {
                        textIndex.set(textIndex.get() + 1);
                    }
                    updatedThisRound.set(true);
                }
            setCurrent(textIndex.get());
            }
        });
        return controls.stop;
    }, []);

    return (
        <span className=''>
            
            {/* {console.log(textIndex.get())} */}
            <motion.span className='herotext' style={{color: texts[current].color}}>
                
            {displayText}
            </motion.span>
            <CursorBlinker />
        </span>
    )
}

export default Cursor
