import { Box, Flex, Grid, GridItem, Image, StylesProvider, Text } from '@chakra-ui/react'
import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import HoverVideoPlayer from 'react-hover-video-player';
import rvid from "./rvid.mp4"
import bvid from "./bvid.mp4"
import lose from "./lose_video.mp4"
import rpic from "./e-commerce.png"
import bpic from "./admin_penal.png"
import spic from "./hotel_booking.png"
import lpic from "./mern_e_commerce.png"

const Project = () => {
  const images = [
    {video:rvid,url:rpic,name:"E-Commerce App",tech:"React, Chakra UI, HTML, CSS, JavaScript",desc:"With Sign In & Sign Up Functionality, E-Commerce App is an online store for Wearing products. Customers can buy a variety of winter clothes, men from jackets, women also, and everyday household items.",gurl:"https://github.com/himanshudwivedi9157/e-coomerce-update",lurl:"https://e-coomerce-update.vercel.app/"},
    {video:rvid,url:lpic,name:"Mern E-Commerce App",tech:"React, Redux, Chakra UI, CSS, Mongo DB, Express",desc:"Mern E-Commerce App is an online store for All products. Customers can buy a veriety of watch ,clothes, clock , stopwatch and all for Men's and Women's. with Sign In & Sign Up Functionality. ",gurl:"https://github.com/himanshudwivedi9157/mern-app-e-commerce-app",lurl:"https://mern-app-e-commerce-app.vercel.app/"},
    {video:rvid,url:spic,name:"HD Hotel Booking ",tech:"React, Chakra UI, HTML, CSS, JavaScript",desc:" More than just your place to stay – HD Booking.com offers all types of accommodation. From take off to landing and everything in between - book your whole trip with us. Hotels. Villas.",gurl:"https://github.com/himanshudwivedi9157/",lurl:"https://mern-app-e-commerce-app.vercel.app/"},
    {video:bvid,url:bpic,name:"Admin Penal",tech:"HTML, CSS, JavaScript",desc:"Here Admin Penal We can update and delete products for e-commerce App which is showing above .A we can see our updated products.",gurl:"https://github.com/himanshudwivedi9157/e-coomerce-update/tree/master/admin",lurl:"https://e-coomerce-update-h8gm.vercel.app/"},
];

  return (
    <Box w="100%" className='dark' h={["2350px","2300px","1200px","1400px","1400px"]}>
    <Flex direction="column" width="80%" margin="auto" height="700px" >
        <br/><br/><br/>
<Text width={["35%","35%","18%","15%","9%"]} className="m">Projects</Text>
<br/><br/><br/>
<Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']} gap={6}>
{images.map(e=>(
  <GridItem w='100%' className='projectbox'>
  <Flex direction="column"  boxShadow='sm' pt="3%" borderRadius="10px" h={["85vh","85vh","80vh","90vh","75vh"]} alignItems="center">
       <Image src={e.url} w="90%" h="40%" borderRadius="15px"/>
       <br/>
       <Box>
        <Text fontSize={["lg","lg","lg","xl",'2xl']} fontWeight="bold" color="#e11d48" textAlign="center" >{e.name}</Text>
        <br/>
        <Text fontSize={["sm","sm","sm","md",'md']}  color="rgb(219, 217, 217)" textAlign="justify" w="90%" m="auto">{e.desc}</Text>
        <br/>
        <Flex w="90%" m="auto" gap="1rem"><Text as="i" fontWeight="bold" color="#e11d48" w="40%">Tech Stack </Text><Text fontWeight="bold" color="white">{e.tech}</Text></Flex>
        <br/>
        <Flex  alignItems="center" justifyContent="space-around" w="50%" m="auto">
                <a href={e.lurl} target="_blank"><Flex justifyContent="center" alignItems="center" borderRadius="50%" height="35px"  width="35px" className="logo1" _hover={{bg: '#e11d48', color:"white",boxShadow:'2xl' }}><span style={{ color: "white"}}>
                <i class="fa-solid fa-eye fa-lg"></i></span></Flex></a>
                <a href={e.gurl} target="_blank"><Flex justifyContent="center" alignItems="center" borderRadius="50%" height="35px"  width="35px" className="logo1" _hover={{bg: '#e11d48', color:"white",boxShadow:'2xl' }}><span style={{ color: "white"}}>
                <i class="fa-brands fa-github fa-lg"></i></span></Flex></a>
                </Flex>

       </Box>
       <br/>
       </Flex>
       </GridItem>
))}

  
</Grid>

       
       
                
                {/* <Text as="b" color='#006cd0' fontSize='2xl'>{e.name}</Text>
                <Box w="90%">
                <Text>Group Project</Text>
                <Text>Completed in 5 days</Text>
                <Text>need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products.</Text>
                <Flex><Text as="i" color="#006cd0">Tech Stack: </Text><Text>{e.tech}</Text></Flex>
                </Box>
                <Flex justifyContent="space-around" w="50%" m="auto" alignItems="center">
                <Flex justifyContent="center" alignItems="center" borderRadius="50%" height="35px"  width="35px" backgroundColor="#006cd0" _hover={{bg: '#0e4988', color:"white",boxShadow:'2xl' }}><span style={{ color: "white"}}>
                <i class="fa-solid fa-eye fa-lg"></i></span></Flex>
                <Flex justifyContent="center" alignItems="center" borderRadius="50%" height="35px"  width="35px" backgroundColor="#006cd0" _hover={{bg: '#0e4988', color:"white",boxShadow:'2xl' }}><span style={{ color: "white"}}>
                <i class="fa-brands fa-github fa-lg"></i></span></Flex>
                </Flex>
                
                </Flex> */}
                
            {/* </Box>)}
        </Slide> */}
        </Flex>
        <br/><br/><br/>
        
        </Box>
  )
}

export default Project