import {
  Box,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Button,
  Badge,
  Image,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import { Code, ExternalLink } from "lucide-react";
import { projects } from "../data/projectsData";
import type { ProjectCard } from "../data/projectsData";

const ProjectCard = ({ project }: { project: ProjectCard }) => {
  return (
    <Box
      bg="brand.eerieBlack"
      borderRadius="lg"
      border="1px solid"
      borderColor="brand.jet"
      overflow="hidden"
      _hover={{
        borderColor: "brand.beaver",
        transform: "translateY(-2px)",
        transition: "all 0.2s",
      }}
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          src={project.image}
          alt={project.title}
          objectFit="cover"
          w="full"
          transition="transform 0.2s"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </AspectRatio>

      <VStack align="stretch" spacing={4} p={6}>
        <VStack align="stretch" spacing={2}>
          <Text fontWeight="bold" fontSize="lg" color="brand.white">
            {project.title}

            <Badge
              bg="brand.black"
              color="brand.beaver"
              fontSize="xs"
              px={1}
              py={0.5}
              ml={2}
              borderRadius="md"
            >
              {project.stack}
            </Badge>
          </Text>

          <Text color="brand.lightGrey" fontSize="sm">
            {project.description}
          </Text>
        </VStack>

        <HStack spacing={2} flexWrap="wrap" gap={2}>
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              bg="brand.jet"
              color="brand.beaver"
              px={2}
              py={1}
              borderRadius="md"
            >
              {tag}
            </Badge>
          ))}
        </HStack>

        <HStack mt={4} spacing={4}>
          <Link href={project.url} isExternal flex={1}>
            <Button
              width="100%"
              leftIcon={<ExternalLink size={20} />}
              color="brand.lightGrey"
              _hover={{ bg: "brand.black", color: "brand.beaver" }}
              variant="ghost"
            >
              Demo
            </Button>
          </Link>
          
          <Link href={project.github} isExternal flex={1}>
            <Button
              width="100%"
              leftIcon={<Code size={20} />}
              color="brand.lightGrey"
              _hover={{ bg: "brand.black", color: "brand.beaver" }}
              variant="ghost"
            >
              GitHub
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

const Projects = () => {
  return (
    <Box id="projects" py={20} px={8} bg="brand.jet">
      <VStack spacing={12} maxW="7xl" mx="auto">
        <VStack spacing={4} textAlign="center">
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
          _hover={{ textDecoration: "none" }}
        >
          <Button
            variant="ghost"
            size="lg"
            color="brand.lightGrey"
            _hover={{ bg: "brand.black", color: "brand.beaver" }}
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
