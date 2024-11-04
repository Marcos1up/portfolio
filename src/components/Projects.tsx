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
import image404 from "../assets/image-404.webp";
import boostup from "../assets/boostup.webp";
import heladitosApp from "../assets/heladitos-app.webp";

interface ProjectCard {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
}

const projects: ProjectCard[] = [
  {
    title: "Boostup",
    description:
      "BOOSTUP es una plataforma de financiamiento colectivo que conecta proyectos StartUp emergentes con inversores interesados en innovación y sostenibilidad.",
    tags: ["React", "Next.js", "Node.js", "MongoDb"],
    image: boostup,
    url: "https://boostup-testing-gilt.vercel.app/",
  },
  {
    title: "AlPaso App",
    description:
      "Desarrollo freelancer de una página de catálogo menú, para un negocio local de comida rápida. Muestra productos destacados, ofertas, favoritos, si se encuentra abierto o cerrado y un mapa de la dirección del local.",
    tags: ["React", "Next.js", "Tailwind"],
    image: image404,
    url: "https://github.com/Marcos1up/AlPaso-App",
  },
  {
    title: "Heladitos App",
    description:
      "E-commerce de helados, con filtros por nombre, categoría y orden por precio. Registro y personalización de usuarios, favoritos, compras seguras con Mercado Pago, reviews de su experiencia en la plataforma y correo electrónico de comprobantes de pagos.",
    tags: ["React", "Node.js", "MongoDb"],
    image: heladitosApp,
    url: "https://heladitos-app.vercel.app/",
  },
];

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

        <Link href={project.url} isExternal _hover={{ textDecoration: "none" }}>
          <Button
            variant="ghost"
            size="sm"
            color="brand.lightGrey"
            _hover={{ bg: "brand.black", color: "brand.beaver" }}
            rightIcon={<ExternalLink size={16} />}
            mt={2}
            w="full"
          >
            Ver proyecto
          </Button>
        </Link>
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
