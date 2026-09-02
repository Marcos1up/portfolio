import { ChakraProvider, Box, Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import theme from './theme';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  //loader spinner
  useEffect(() => {
    const loadTimeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(loadTimeout);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="100vh"
          w="100vw" //responsive
          bg="brand.jet"
        >
          <Spinner size={{ base: 'lg', md: 'xl' }} color="brand.beaver" />
        </Box>
      ) : (
        <>
          <Header />
          <Box>
            <Hero />
            <Skills />
            <Projects />
            <Footer />
          </Box>
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
