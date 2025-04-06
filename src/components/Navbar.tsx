"use client";

import { Box, Button, Flex, Link, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from "./Logo";

interface NavBarProps {
  children: React.ReactNode;
}

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

interface MenuLinksProps {
  isOpen: boolean;
}

interface MenuItemProps {
  children: React.ReactNode;
  isLast?: boolean;
  to?: string;
}

const MenuItem = ({ children, to = "/", isLast }: MenuItemProps) => {
  return (
    <Link href={to} colorPalette="cyan" px={5}>
      <Button colorPalette="cyan" px={5} variant={isLast ? "solid" : "ghost"}>
        {children}
      </Button>
    </Link>
  );
};

const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        gap={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Repertuar</MenuItem>
        <MenuItem to="/signup" isLast>
          Create Account
        </MenuItem>
      </Stack>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <IoMdClose /> : <IoMdMenu />}
    </Box>
  );
};

const NavBarContainer = ({ children }: NavBarProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={8}
      py={4}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["cyan", "cyan", "cyan.700", "cyan.700"]}
    >
      {children}
    </Flex>
  );
};

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer>
      <Logo color={["white", "white", "primary.500", "primary.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};
