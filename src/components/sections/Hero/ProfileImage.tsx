import { Box, Image } from '@chakra-ui/react';

import profilePic from '@/assets/me-profile.webp';

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
        backgroundSize="20px 20px"
        borderRadius="full"
        transform="rotate(12deg)"
      />
    </Box>
  );
};

export default ProfileImage;
