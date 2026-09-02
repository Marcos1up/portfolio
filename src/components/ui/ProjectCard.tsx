import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Badge,
  Image,
  AspectRatio,
  Link,
} from '@chakra-ui/react';
import { Code, ExternalLink } from 'lucide-react';
import type { ProjectCardData } from '@/data/projectsData';

const ProjectCard = ({ project }: { project: ProjectCardData }) => {
  return (
    <Box
      bg="brand.eerieBlack"
      borderRadius="lg"
      border="1px solid"
      borderColor="brand.jet"
      overflow="hidden"
      _hover={{
        borderColor: 'brand.beaver',
        transform: 'translateY(-2px)',
        transition: 'all 0.2s',
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
            transform: 'scale(1.05)',
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
              _hover={{ bg: 'brand.black', color: 'brand.beaver' }}
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
              _hover={{ bg: 'brand.black', color: 'brand.beaver' }}
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

export default ProjectCard;
