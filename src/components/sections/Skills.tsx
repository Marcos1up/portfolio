import {
  Box,
  VStack,
  SimpleGrid,
  Text,
  Badge,
} from '@chakra-ui/react';
import { skillsData } from '@/data/skillsData';
import SkillCard from '@/components/ui/SkillCard';

const Skills = () => {
  return (
    <Box id="skills" py={20} px={8} bg="brand.eerieBlack">
      <VStack spacing={12} maxW="7xl" mx="auto">
        <VStack spacing={4} textAlign="center" pt="1rem">
          <Badge
            color="brand.white"
            bg="brand.beaver"
            p={2}
            borderRadius="full"
            fontSize="sm"
          >
            Competencia técnica:
          </Badge>
          <Text fontSize="2xl" fontWeight="bold" color="brand.white">
            Habilidades preparadas para el combate
          </Text>
          <Text color="brand.lightGrey" maxW="2xl">
            Dominada a través de innumerables batallas con problemas complejos y
            desafíos del mundo real. Cada habilidad representa horas de práctica
            y aplicación práctica.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
          {skillsData.map((skillGroup) => (
            <SkillCard key={skillGroup.category} {...skillGroup} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Skills;
