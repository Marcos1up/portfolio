import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import Stats from "./components/Stats";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box pt={20}>
        <Hero />
        {/* <Stats /> */}
        <Skills />
        <Projects />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
