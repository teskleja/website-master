import React from "react";
import {
  HStack,
  Button,
  useColorModeValue,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import Container from "../components/container";
import NextLink from "next/link";
import { GithubLogo } from "phosphor-react";
import Link from "./link";

const Footer = () => {
  function FooterLink({ href, name }) {
    return (
      <NextLink href={href} passHref legacyBehavior>
        <Button
          variant="unstyled"
          color={useColorModeValue("neutral.800", "neutralD.800")}
          _hover={{
            color: useColorModeValue("neutral.1000", "neutralD.1000"),
          }}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  return (
    <Container>
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: "none", md: "flex" }}
        my={8}
      >
        {/* LEFT: Contact */}
        <FooterLink href="mailto:panjiariyojipang@email.com" name="Contact" />

        {/* RIGHT: Github */}
        <Link href="https://github.com/teskleja" isExternal unstyled>
          <IconButton
            size="sm"
            icon={<Icon as={GithubLogo} weight="fill" />}
            color={useColorModeValue("neutral.800", "neutralD.1000")}
          />
        </Link>
      </HStack>
    </Container>
  );
};

export default Footer;