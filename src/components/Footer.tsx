import {
  Box,
  Container,
  HStack,
  Text,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { Github, Linkedin, Instagram, Sparkles, Twitter } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/marcos-soria-dev/',
    label: 'LinkedIn',
  },
  { icon: Github, href: 'https://github.com/Marcos1up', label: 'GitHub' },
  {
    icon: Twitter,
    href: 'https://x.com/Marcos_1Up',
    label: 'Twitter',
  },
  {
    icon: Instagram,
    href: 'https://www.instagram.com/marcos.1up/',
    label: 'Instagram',
  },
];

const Footer = () => {
  return (
    <Box as="footer" bg="brand.eerieBlack" py={{ base: 6, md: 10 }} mt="auto">
      <Container maxW="7xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={{ base: 4, md: 0 }}
        >
          {/* Social Icons - Horizontal on mobile, vertical on desktop */}
          <Flex
            gap={{ base: 4, md: 6 }}
            direction={{ base: 'row', md: 'row' }}
            mb={{ base: 4, md: 0 }}
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <IconButton
                key={label}
                as="a"
                href={href}
                target="_blank"
                aria-label={label}
                icon={<Icon size={20} />}
                variant="ghost"
                color="brand.lightGrey"
                _hover={{
                  color: 'brand.beaver',
                  transform: 'translateY(-2px)',
                  bg: 'brand.black',
                }}
                transition="all 0.2s"
              />
            ))}
          </Flex>

          {/* Copyright Text */}
          <HStack
            spacing={2}
            color="brand.lightGrey"
            fontSize={{ base: 'xs', md: 'sm' }}
            flexWrap="wrap"
            justify="center"
          >
            <Text>©Copyright </Text>
            <Text>|</Text>
            <Text>Coded with</Text>
            <Box
              as={Sparkles}
              size={16}
              color="brand.beaver"
              animation="pulse 2s infinite"
            />
            <Text>by</Text>
            <Text color="brand.beaver" fontWeight="medium">
              Marcos
            </Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
