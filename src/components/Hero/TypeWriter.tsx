import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface TypeWriterProps {
  roles: string[];
}

const TypeWriter = ({ roles }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <Box h={{ base: "24px", md: "28px" }}>
      <Text
        fontSize={{ base: "md", md: "lg" }}
        color="brand.lightGrey"
        letterSpacing="wider"
        fontFamily="'JetBrains Mono', monospace"
      >
        {displayText}
        <Box as="span" animation="blink 1s step-end infinite">
          |
        </Box>
      </Text>
    </Box>
  );
};

export default TypeWriter;
