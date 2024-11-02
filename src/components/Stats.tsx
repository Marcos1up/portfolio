import { Box, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

const Stats = () => {
  return (
    <Box py={12} px={8} bg="whiteAlpha.100">
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} maxW="7xl" mx="auto">
        <Stat>
          <StatLabel color="gray.400">Projects Completed</StatLabel>
          <StatNumber fontSize="4xl" bgGradient="linear(to-r, brand.primary, brand.secondary)" bgClip="text">
            50+
          </StatNumber>
          <StatHelpText color="gray.500">Last 12 months</StatHelpText>
        </Stat>
        
        <Stat>
          <StatLabel color="gray.400">Lines of Code</StatLabel>
          <StatNumber fontSize="4xl" bgGradient="linear(to-r, brand.primary, brand.secondary)" bgClip="text">
            500k+
          </StatNumber>
          <StatHelpText color="gray.500">Clean & Efficient</StatHelpText>
        </Stat>
        
        <Stat>
          <StatLabel color="gray.400">GitHub Contributions</StatLabel>
          <StatNumber fontSize="4xl" bgGradient="linear(to-r, brand.primary, brand.secondary)" bgClip="text">
            2.5k+
          </StatNumber>
          <StatHelpText color="gray.500">Last year</StatHelpText>
        </Stat>
        
        <Stat>
          <StatLabel color="gray.400">Client Satisfaction</StatLabel>
          <StatNumber fontSize="4xl" bgGradient="linear(to-r, brand.primary, brand.secondary)" bgClip="text">
            100%
          </StatNumber>
          <StatHelpText color="gray.500">Based on reviews</StatHelpText>
        </Stat>
      </SimpleGrid>
    </Box>
  );
};

export default Stats;