import { Box, VStack } from '@chakra-ui/react';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/marcos-soria-dev/' },
  { icon: Github, href: 'https://github.com/Marcos1up' },
  { icon: Twitter, href: 'https://x.com/Marcos_1Up' },
];

const SocialIcons = () => {
  return (
    <Box
      position="absolute"
      left={{ base: '50%', xl: '5%' }}
      bottom={{ base: '2rem', lg: 'auto' }}
      top={{ base: 'auto', lg: '50%' }}
      transform={{
        base: 'translateX(-50%)',
        lg: 'translateY(-50%)',
      }}
      display={{ base: 'none', md: 'block' }}
    >
      <VStack
        spacing={6}
        direction={{ base: 'row', lg: 'column' }}
        align="center"
      >
        {socialLinks.map((social, index) => (
          <Box
            key={index}
            as="a"
            href={social.href}
            target="_blank"
            color="brand.lightGrey"
            transition="all 0.2s"
            _hover={{ color: 'brand.beaver', transform: 'translateY(-2px)' }}
          >
            <social.icon size={20} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default SocialIcons;
