import {
  Box,
  Flex,
  Button,
  Heading,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Image,
} from '@chakra-ui/react';
import { Code2, Github, Linkedin, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import logoImg from '@/assets/logo.webp';
import { GITHUB_URL, LINKEDIN_URL } from '@/constants/profile';
import { navLinks } from '@/constants/navLinks';
import { useCopyEmail } from '@/hooks/useCopyEmail';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const { isCopied, handleCopyEmail } = useCopyEmail();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onClose();
    }
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      transform={`translateY(${scrolled ? '0' : '0'})`}
      transition="all 0.3s"
      bg={'rgba(31, 31, 31, 0.80)'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor="whiteAlpha.100"
    >
      <Flex
        justify="space-between"
        align="center"
        maxW="7xl"
        mx="auto"
        py={4}
        px={8}
      >
        <Flex align="center" gap={2}>
          <Image src={logoImg} alt="Marcos Soria" w="50px" objectFit="cover" />
          <Heading size="md" color="brand.white">
            Marcos Soria
          </Heading>
        </Flex>

        {/* Desktop Navigation */}
        <Flex gap={4} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map(({ id, label }) => (
            <Button
              key={id}
              variant="ghost"
              onClick={() => scrollTo(id)}
              _hover={{ bg: 'brand.black', color: 'brand.beaver' }}
              color="brand.lightGrey"
            >
              {label}
            </Button>
          ))}
          <Button
            onClick={handleCopyEmail}
            variant="solid"
            bg={isCopied ? 'green.500' : 'brand.beaver'}
            color={isCopied ? 'white' : 'brand.jet'}
            _hover={isCopied ? {} : { bg: 'brand.black' }}
          >
            {isCopied ? 'Correo Copiado' : 'Contáctame'}
          </Button>
        </Flex>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Open menu"
          icon={<Menu size={24} />}
          variant="ghost"
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          _hover={{ bg: 'brand.black' }}
          color="brand.lightGrey"
        />

        {/* Mobile Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
          <DrawerOverlay />
          <DrawerContent bg="brand.eerieBlack">
            <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.100">
              <Flex justify="space-between" align="center">
                <Flex align="center" gap={2}>
                  <Code2 size={24} />
                  <Heading size="md" color="brand.white">
                    Marcos Soria
                  </Heading>
                </Flex>
                <IconButton
                  aria-label="Close menu"
                  icon={<X size={24} />}
                  variant="ghost"
                  onClick={onClose}
                  _hover={{ bg: 'brand.black' }}
                  color="brand.lightGrey"
                />
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              <VStack spacing={4} align="stretch" mt={8}>
                {navLinks.map(({ id, label }) => (
                  <Button
                    key={id}
                    variant="ghost"
                    size="lg"
                    onClick={() => scrollTo(id)}
                    _hover={{ bg: 'brand.black', color: 'brand.beaver' }}
                    color="brand.lightGrey"
                  >
                    {label}
                  </Button>
                ))}
                <Button
                  as="a"
                  href={GITHUB_URL}
                  target="_blank"
                  variant="ghost"
                  size="lg"
                  leftIcon={<Github size={20} />}
                  _hover={{ bg: 'brand.black', color: 'brand.beaver' }}
                  color="brand.lightGrey"
                >
                  GitHub
                </Button>
                <Button
                  as="a"
                  href={LINKEDIN_URL}
                  target="_blank"
                  variant="ghost"
                  size="lg"
                  leftIcon={<Linkedin size={20} />}
                  _hover={{ bg: 'brand.black', color: 'brand.beaver' }}
                  color="brand.lightGrey"
                >
                  LinkedIn
                </Button>
                <Button
                  onClick={handleCopyEmail}
                  variant="solid"
                  size="lg"
                  bg={isCopied ? 'green.500' : 'brand.beaver'}
                  color={isCopied ? 'white' : 'brand.jet'}
                  _hover={isCopied ? {} : { bg: 'brand.black' }}
                >
                  {isCopied ? 'Correo Copiado' : 'Contáctame'}
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Header;
