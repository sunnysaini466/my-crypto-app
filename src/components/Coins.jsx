import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { server } from '..';
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react';

import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from './CoinCard';



const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  

  const btns = new Array(132).fill(1);

  const changePage = (page) => {

    setPage(page);
    setLoading(true);
  }


  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {

    const fetchExchanges = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }


    }

    fetchExchanges();
  }, [currency, page])


  if (error) return <ErrorComponent message={"Error ! While fetching exchanges list."} />




  return (
    <Container maxW={"container.xl"}>

      {
        loading ? <Loader /> : (
          <>

            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack spacing={"4"}>
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>
              </HStack>
            </RadioGroup>


            <HStack wrap={"wrap"} justifyContent={"center"}>
              {
                coins.map((i) => (
                  <CoinCard
                    id={i.id}
                    name={i.name}
                    image={i.image}
                    symbol={i.symbol}
                    price={i.current_price}
                    key={i.id}
                    currencySymbol={currencySymbol}


                  />
                ))
              }
            </HStack>
            <HStack w={"full"} overflowX={"auto"} p={"8"}>
              {
                btns.map((item, index) => (
                  <Button bgColor={"blackAlpha.900"} color={"white"} onClick={() => changePage(index + 1)}>
                    {index + 1}
                  </Button>
                ))
              }
            </HStack>
          </>
        )
      }

    </Container>
  )
}

export default Coins