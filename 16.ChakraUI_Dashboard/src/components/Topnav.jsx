import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RiUser3Fill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon as={FaBars} onClick={onOpen} display={{
            base: "block",
            lg: "none"
        }} />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon fontSize="25px" as={RiUser3Fill} />
          </MenuButton>
          <MenuList>
            <MenuItem>Support</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
