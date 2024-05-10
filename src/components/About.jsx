import { DownloadIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import himanshu from "./hdimage.png"
import resume from "./himanshu_resume.pdf"
import styles from "./about.module.css"


const About = () => {
  return (
<div className={styles.c2}>
<div className={styles.c1}>
  <area0></area0>
  <area5></area5>
  <area4></area4>
     <area1>
     <Text  fontSize={['lg','lg','xl','xl','4xl']} className="text">Hi, I am Himanshu Dwivedi,</Text>
      <Text fontWeight="600" fontSize={['xl','xl','3xl','3xl','5xl']} color="rgb(225, 29, 72)">Full Stack Web Developer</Text>
         
     </area1>
     <area2>
     <img src={himanshu} alt='himanshu resume' />
     </area2>
     <area3>
     <Text fontSize={['sm','sm','lg','xl','xl']} color="#b7bdc5">An enthusiastic web developer with strong technical as well as communication skills and expertise in MERN stack.</Text>
    <br/>
 <Button leftIcon={<DownloadIcon />} colorScheme='whatsapp' variant='solid' borderRadius="20px">
  <a href={resume} download="himanshu_resume">Resume</a>
</Button>
     </area3>
    </div>
</div>
    
  )
}

export default About