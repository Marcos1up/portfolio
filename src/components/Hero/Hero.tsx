import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { Download, Mail, Check } from "lucide-react";
import SocialIcons from "./SocialIcons";
import TypeWriter from "./TypeWriter";
import ProfileImage from "./ProfileImage";
import { useState } from "react";

const roles = [
  "Desarrollador Back-End",
  "Arquitecto de APIs",
  "Automatizador de Procesos",
  "Optimizador de Base de Datos",
  "Desarrollador de Microservicios",
  "Codeador creativo",
];

const cvDownload =
  "https://drive.google.com/file/d/1ja3vA5y3f-aFn1S8t1e8qvNEqDZqFTXq/view";
const email = "itsmarcos.1up@gmail.com";

const Hero = () => {
  const { onCopy } = useClipboard(email);
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();

  const handleCopyEmail = () => {
    onCopy();
    setIsCopied(true);
    toast({
      title: "Correo copiado",
      description: "El correo ha sido copiado al portapapeles.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });

    setTimeout(() => setIsCopied(false), 10000);
  };

  return (
    <Box
      id="home"
      py={{ base: 12, md: 15, lg: 20 }}
      px={{ base: 4, md: 8 }}
      bg="brand.jet"
      position="relative"
      overflow="hidden"
    >
      {/* Decorative Background Elements */}
      <Box
        position="absolute"
        right={0}
        top={0}
        w="50%"
        h="100%"
        opacity={0.05}
        backgroundImage="radial-gradient(circle at 1px 1px, brand.lightGrey 1px, transparent 0)"
        backgroundSize="40px 40px"
      />

      <SocialIcons />

      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        maxW="7xl"
        mx="auto"
        gap={{ base: 8, md: 12, lg: 20 }}
      >
        <VStack
          align={{ base: "center", lg: "start" }}
          textAlign={{ base: "center", lg: "left" }}
          flex={1}
        >
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="brand.beaver"
            fontFamily="'JetBrains Mono', monospace"
          >
            Hola! Soy
          </Text>

          <Heading
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            color="brand.white"
            lineHeight="1.2"
            fontWeight="bold"
          >
            Marcos Soria
          </Heading>

          <TypeWriter roles={roles} />

          <Text
            fontSize={{ base: "md", md: "lg" }}
            color="brand.lightGrey"
            maxW="xl"
            px={{ base: 4, lg: 0 }}
            py="1.5rem"
          >
            Soy un apasionado desarrollador de software con inclinación hacia el
            Back-End y con experiencia en la gestión de proyectos, enfocándome
            en el progreso y la innovación tecnológica.
          </Text>

          <HStack spacing={4} pt={{ base: 2, md: 4 }} w="75%">
            <Button
              as="a"
              href={cvDownload}
              target="_blank"
              size={{ base: "md", md: "lg" }}
              variant="solid"
              bg="brand.beaver"
              color="brand.jet"
              _hover={{ bg: "brand.black" }}
              leftIcon={<Download size={20} />}
              flex="1"
              px={{ base: 6, md: 8 }}
            >
              CV
            </Button>
            <Button
              onClick={handleCopyEmail}
              size={{ base: "md", md: "lg" }}
              variant="ghost"
              color={isCopied ? "green.500" : "brand.lightGrey"}
              bg={isCopied ? "green.100" : "transparent"}
              _hover={
                isCopied
                  ? { bg: "green.100", color: "green.500" }
                  : { bg: "brand.black", color: "brand.beaver" }
              }
              leftIcon={isCopied ? <Check size={20} /> : <Mail size={20} />}
              flex="1"
              px={{ base: 6, md: 8 }}
            >
              {isCopied ? "Copiado" : "EMAIL"}
            </Button>
          </HStack>
        </VStack>

        <ProfileImage />
      </Flex>
    </Box>
  );
};

export default Hero;
