import {
  Box,
  VStack,
  SimpleGrid,
  Text,
  Progress,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  Terminal,
  Database,
  Layout,
  Server,
  Shield,
  Brain,
} from "lucide-react";

interface Skill {
  category: string;
  icon: any;
  skills: {
    name: string;
    level: number;
    experience: string;
  }[];
}

const skillsData: Skill[] = [
  {
    category: "Frontend",
    icon: Layout,
    skills: [
      { name: "React/Next.js", level: 74, experience: "2 Años" },
      { name: "TypeScript", level: 88, experience: "1 Año" },
      { name: "Tailwind/Chakra UI", level: 55, experience: "2 Años" },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 92, experience: "2 Años" },
      { name: "Python", level: 75, experience: "1 Año" },
      { name: "GraphQL", level: 40, experience: "1 Año" },
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 78, experience: "2 Años" },
      { name: "MongoDB", level: 88, experience: "2 Años" },
      { name: "MySQL", level: 45, experience: "1 Año" },
    ],
  },
  {
    category: "DevOps",
    icon: Terminal,
    skills: [
      { name: "Docker", level: 85, experience: "2 Años" },
      { name: "AWS", level: 60, experience: "1 Año" },
      { name: "CI/CD", level: 72, experience: "1 Año" },
    ],
  },
  {
    category: "Security",
    icon: Shield,
    skills: [
      { name: "Auth0/JWT", level: 90, experience: "2 Años" },
      { name: "Web Security", level: 85, experience: "2 Años" },
      { name: "Encryption", level: 62, experience: "2 Años" },
    ],
  },
  {
    category: "Tools and Others",
    icon: Brain,
    skills: [
      { name: "Git", level: 85, experience: "2 Años" },
      { name: "Insomnia/Postman", level: 75, experience: "2 Años" },
      { name: "Jira", level: 52, experience: "1 Año" },
    ],
  },
];

const SkillCard = ({ category, icon, skills }: Skill) => {
  return (
    <Box
      p={6}
      bg="brand.jet"
      borderRadius="lg"
      border="1px solid"
      borderColor="brand.eerieBlack"
      _hover={{
        borderColor: "brand.beaver",
        transform: "translateY(-2px)",
        transition: "all 0.2s",
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
        <VStack spacing={4} textAlign="center">
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
