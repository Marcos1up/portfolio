import {
  Box,
  VStack,
  HStack,
  Text,
  Progress,
  Badge,
  Icon,
} from '@chakra-ui/react';
import type { Skill } from '@/data/skillsData';

const SkillCard = ({ category, icon, skills }: Skill) => {
  return (
    <Box
      p={6}
      bg="brand.jet"
      borderRadius="lg"
      border="1px solid"
      borderColor="brand.eerieBlack"
      _hover={{
        borderColor: 'brand.beaver',
        transform: 'translateY(-2px)',
        transition: 'all 0.2s',
      }}
    >
      <VStack align="stretch" spacing={4}>
        <HStack spacing={3}>
          <Icon as={icon} size={20} color="brand.beaver" />
          <Text fontWeight="bold" fontSize="lg" color="brand.white">
            {category}
          </Text>
        </HStack>

        <VStack align="stretch" spacing={4}>
          {skills.map((skill) => (
            <Box key={skill.name}>
              <HStack justify="space-between" mb={2}>
                <Text fontSize="sm" color="brand.lightGrey">
                  {skill.name}
                </Text>
                <Badge color="brand.beaver" bg="brand.black" fontSize="xs">
                  {skill.experience}
                </Badge>
              </HStack>
              <Progress
                value={skill.level}
                size="sm"
                colorScheme="green"
                bg="brand.eerieBlack"
                borderRadius="full"
              />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default SkillCard;
