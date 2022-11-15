import React from 'react'
import { Box, Spinner, VStack } from '@chakra-ui/react';

import '../styles/App.css';

const Loader = () => {
     return (
          // <div className='loading'>
          //      <div></div>
          //      <p>Loading...</p>
          // </div>
          <VStack h={"90vh"} justifyContent={"center"}>
               <Box transform={"scale(3)"}>
                    <Spinner size={"xl"} />
               </Box>
          </VStack>
     )
}

export default Loader