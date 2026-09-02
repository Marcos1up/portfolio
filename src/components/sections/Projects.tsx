import {
  Box,
  SimpleGrid,
  VStack,
  Text,
  Button,
  Badge,
  Link,
} from '@chakra-ui/react';
import { Code } from 'lucide-react';
import { projects } from '@/data/projectsData';
import ProjectCard from '@/components/ui/ProjectCard';

const Projects = () => {
  return (
    <Box id="projects" py={20} px={8} bg="brand.jet">
      <VStack spacing={12} maxW="7xl" mx="auto">
        <VStack spacing={4} textAlign="center" pt="1rem">
          <Badge
            color="brand.white"
            bg="brand.beaver"
            p={2}
            borderRadius="full"
            fontSize="sm"
          >
            Proyectos destacados
          </Badge>
          <Text fontSize="2xl" fontWeight="bold" color="brand.white">
            Soluciones del mundo real
          </Text>
          <Text color="brand.lightGrey" maxW="2xl">
            Cada proyecto representa un desafío único que se resuelve con un
            código elegante. Explore las soluciones y vea cómo los problemas
            complejos se descomponen en componentes manejables.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>

        <Link
          href="https://github.com/Marcos1up?tab=repositories"
          isExternal
          _hover={{ textDecoration: 'none' }}
        >
          <Button
            variant="ghost"
            size="lg"
            color="brand.lightGrey"
            _hover={{ bg: 'brand.black', color: 'brand.beaver' }}
            rightIcon={<Code size={20} />}
          >
            Ver todos los proyectos
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Projects;
