import { extendTheme } from "@chakra-ui/react";

const fonts = {
  heading: "'Cooper Hewitt', sans-serif",
  body: "'Cooper Hewitt', sans-serif",
};

const colors = {
  brand: {
    white: "#FFFFFF", //títulos y selección de texto
    lightGrey: "#D9D9D9", //texto general

    beaver: "#A78976", //resaltos, hover y scrollbar
    black: "#141414", //sombras y fondo oscuro adicional

    eerieBlack: "#1F1F1F", //fondo oscuro de secciones y elementos
    jet: "#292929", //fondo claro de secciones

    //alias semánticos de fondo de sección (mismos hex que jet/eerieBlack)
    sectionEven: "#292929", //fondo de sección par (alias de jet)
    sectionOdd: "#1F1F1F", //fondo de sección impar (alias de eerieBlack)
  },
};

//estilos globales
const styles = {
  global: {
    "html, body": {
      bg: "brand.eerieBlack",
      color: "brand.lightGrey",
      fontSize: "100%",
      fontFamily: "body",
      scrollBehavior: "smooth",
    },
    "::selection": {
      backgroundColor: "brand.beaver",
    },
    "::-webkit-scrollbar": {
      width: "8px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "brand.eerieBlack",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "brand.beaver",
    },

    //color a los encabezados y títulos
    h1: {
      fontSize: "2.5rem", //para desktop
      color: "brand.white",
    },
    p: {
      fontSize: "1.4rem",
    },
    h2: {
      color: "brand.white",
    },

    //botones y enlaces
    a: {
      color: "brand.white",
      _hover: {
        color: "brand.beaver",
      },
    },
  },
};

//componentes específicos
const components = {
  Button: {
    baseStyle: {
      fontSize: "1.2rem",
      paddingX: 6,
      paddingY: 4,
      _hover: {
        boxShadow: "lg",
        bg: "brand.beaver",
        color: "brand.jet",
      },
    },
    variants: {
      solid: {
        bg: "brand.beaver",
        color: "brand.jet",
      },
      ghost: {
        color: "brand.lightGrey",
        _hover: {
          bg: "brand.black",
          color: "brand.beaver",
        },
      },
    },
  },
  Heading: {
    baseStyle: {
      color: "brand.white",
    },
  },
  Text: {
    baseStyle: {
      color: "brand.lightGrey",
    },
  },
  IconButton: {
    baseStyle: {
      _hover: {
        bg: "brand.black",
      },
    },
  },
};

//transición compartida por las cards (SkillCard / ProjectCard)
export const CARD_TRANSITION = "all 0.2s";

//estilos de texto reutilizables en las secciones
const textStyles = {
  sectionTitle: {
    fontSize: "2xl",
    fontWeight: "bold",
    color: "brand.white",
  },
  sectionSubtitle: {
    color: "brand.lightGrey",
    maxW: "2xl",
  },
};

const theme = extendTheme({
  colors,
  fonts,
  styles,
  textStyles,
  components,
});

export default theme;
