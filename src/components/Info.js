import React from 'react'
import './Info.css';
import profilePic from './amstd_profile6.jpg'
import TypeIt from "typeit-react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {IconContext} from "react-icons"
import { motion } from 'framer-motion';
import { HStack } from '@chakra-ui/react'

function Info() {

  return (
      
        <div>
            <div className="heading">
                <motion.div
                    animate={{ scale: 1 }} 
                    initial={{ scale: 0}}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 1 }}>
                    <img src={profilePic} alt='proPic'></img>
                </motion.div>
                <span>
                    <TypeIt as={"h1"}
                        options={{ speed: 50,
                            waitUntilVisible: true,
                            startDelay: 2000,
                            }}
                        getBeforeInit={(instance) => {
                            instance.pause(300)
                            .type("Hey!")
                            .pause(1200)
                            .delete(4, {instant:true})
                            .type("Why so serious?")
                            .pause(800)
                            .type(" You gotta smile more 😃")
                            .pause(1000)
                            .delete(40, {instant:true})
                            .type("I'm Wyatt 👋")
                            .break({delay:300})
                            .type('Thanks for visiting here!', {speed: 5});
                            
                            return instance;
                        }}
                    />
                </span>
                <h2>
                    <HStack spacing={90}>
                        <IconContext.Provider value={{ className: 'h3' }}>
                            <motion.div 
                                animate={{ scale: 1 }} 
                                initial={{ scale: 0}}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 11.8 }}>
                                <a href="mailto:wyatt6388@gmail.com">
                                    <MdOutlineEmail className="text-white"/>
                                </a>
                            </motion.div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: '#0072b1', className: 'h4' }}>
                            <motion.div 
                                animate={{ scale: 1 }} 
                                initial={{ scale: 0}}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 12.3 }}>
                                    <a href='https://www.linkedin.com/in/wyatt-chen-36ba25105'>
                                        <FaLinkedin className="text-white"/>
                                    </a>
                            </motion.div>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ color: '#2b3137', className: 'h5' } }>
                            <motion.div 
                                animate={{ scale: 1 }} 
                                initial={{ scale: 0}}
                                transition={{ duration: 0.5, ease: 'easeOut', delay: 12.8 }}>
                                    <a href='https://github.com/wyattchen'>
                                        <FaGithub className="text-white"/>
                                    </a>
                            </motion.div>
                        </IconContext.Provider>
                    </HStack>
                </h2>
            </div>
        </div>
    );
}

export default Info;