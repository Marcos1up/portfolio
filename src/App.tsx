import { ChakraProvider, Box, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import theme from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import Stats from "./components/Stats";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  //loader spinner
  useEffect(() => {
    const loadTimeout = setTimeout(() => setIsLoading(false), 1000);
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
          <Spinner size={{ base: "lg", md: "xl" }} color="brand.beaver" />
        </Box>
      ) : (
        <>
          <Header />
          <Box pt={20}>
            <Hero />
            {/* <Stats /> */}
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
