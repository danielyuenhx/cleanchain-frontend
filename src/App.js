import React, { useState } from 'react';
import {
  Flex,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Spacer,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Map from './components/Map';
import LocationList from './components/LocationList';

function App() {
  const [position, setPosition] = useState([3.1569, 101.7123]);

  const changeLocation = (position) => {
    setPosition(position);
  };

  return (
    <>
      <Navbar />
      <Box w="full" h="full" px="10rem" position="relative" top="7rem">
        <Flex justifyContent="space-around">
          <LocationList onClickHandler={changeLocation} />
          <Map position={position} />
        </Flex>
      </Box>
    </>
    /* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */
  );
}

export default App;
