import React from "react";
import { Box, BoxProps, Text } from "@chakra-ui/react";
import { MdOutlineLocalMovies } from "react-icons/md";
import "./logo.scss";

interface LogoProps extends BoxProps {
  color?: string[];
}

export default function Logo(props: LogoProps) {
  return (
    <Box {...props}>
      <Text fontSize="xl" fontWeight="bold" className="logo">
        <MdOutlineLocalMovies />
        nova
      </Text>
    </Box>
  );
}
