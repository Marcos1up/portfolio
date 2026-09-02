import { Box, VStack } from '@chakra-ui/react';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL, TWITTER_URL } from '@/constants/profile';

const socialLinks = [
  { icon: Linkedin, href: LINKEDIN_URL },
  { icon: Github, href: GITHUB_URL },
  { icon: Twitter, href: TWITTER_URL },
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
