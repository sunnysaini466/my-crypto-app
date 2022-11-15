import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/71134851";

const Footer = () => {
     return (
          <Box
               bgColor={"blackAlpha.900"}
               color={"whiteAlpha.700"}
               minH={"48"}
               px={"16"}
               py={["16", "8"]}
          >
               <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                    <VStack w={"full"} alignItems={["center", "flex-start"]}>
                         <Text fontWeight={"bold"}>About Us</Text>
                         <Text
                              fontSize={"sm"}
                              letterSpacing={"widest"}
                              textAlign={["center", "left"]}
                         >
                              It is a crypto tracing app where you can check all exchanges and coins. 
                         </Text>
                    </VStack>

                    <VStack>
                         <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
                         <Text>Dev</Text>
                    </VStack>
               </Stack>
          </Box>
     );
};

export default Footer;