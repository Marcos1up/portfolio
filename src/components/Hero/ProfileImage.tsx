import { Box, Image } from '@chakra-ui/react';

// import profile from '../../assets/profile.webp';
import profilePic from '../../assets/me-profile.webp';

const ProfileImage = () => {
  return (
    <Box
      flex={1}
      position="relative"
      maxW={{ base: '580px', sm: '420px', md: '500px', lg: '600px' }}
      w="full"
    >
      <Image
        src={profilePic}
        alt="Marcos Soria"
        borderRadius="2xl"
        objectFit="cover"
        // filter="drop-shadow(1px 1px 20px #141414)"
        w="full"
        h={{ base: '400px', md: '500px', lg: '600px' }}
        position="relative"
      />

      {/* Decorative Pattern */}
      <Box
        position="absolute"
        right="-10%"
        bottom="-10%"
        w="70%"
        h="70%"
        // backgroundImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)"
        backgroundSize="20px 20px"
        borderRadius="full"
        transform="rotate(12deg)"
      />
    </Box>
  );
};

export default ProfileImage;
