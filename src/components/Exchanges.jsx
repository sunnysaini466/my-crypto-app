import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { server } from '..';
import { Container, HStack, VStack, Image, Heading, Text } from '@chakra-ui/react';

import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";



const Exchanges = () => {

     const [exchanges, setExchanges] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(false);



     useEffect(() => {

          const fetchExchanges = async () => {

               try {
                    const { data } = await axios.get(`${server}/exchanges`);
                    setExchanges(data);
                    setLoading(false);
               } catch (error) {
                    setLoading(false);
                    setError(true);
               }


          }

          fetchExchanges();
     }, [])


     if (error) return <ErrorComponent message={"Error ! While fetching exchanges list."}/>




     return (
          <Container maxW={"container.xl"}>

               {
                    loading ? <Loader /> : (
                         <>

                              <HStack wrap={"wrap"} justifyContent={"center"}>
                                   {
                                        exchanges.map((i) => (
                                             <ExchangeCard
                                                  name={i.name}
                                                  image={i.image}
                                                  rank={i.trust_score_rank}
                                                  url={i.url}
                                                  key={i.id}
                                             />
                                        ))
                                   }
                              </HStack>
                         </>
                    )
               }

          </Container>
     )
}


const ExchangeCard = ({ name, image, rank, url }) => (
     <a href={url} target={"blank"}>
          <VStack w={"52"} shadow={"lg"} borderRadius={"lg"} p={"8"}
               transition={"all 0.3s"}
               margin={"4"}
               css={{
                    "&:hover": {
                         transform: "scale(1.1)"
                    }
               }}
          >
               <Image src={image} h={"10"} w={"10"} objectFit={"contain"} alt={"Exchange"} />
               <Heading size={"md"} noOfLines={1}>{rank}</Heading>
               1<Text noOfLines={1}>{name}</Text>
          </VStack>

     </a>
)



export default Exchanges