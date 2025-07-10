import {
  Box,
  VStack,
  SimpleGrid,
  Text,
  Progress,
  Badge,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { Skill, skillsData } from '../data/skillsData';
/* import {
  Terminal,
  Database,
  Layout,
  Server,
  Shield,
  Brain,
} from "lucide-react"; */

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
