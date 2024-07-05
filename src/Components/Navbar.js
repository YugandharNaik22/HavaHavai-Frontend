import React from "react";
import { Flex, Image } from "@adobe/react-spectrum";
import image from "../assets/havahavai.png"; 
import profile from "../assets/Avatar.png"; 

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      UNSAFE_style={{ padding: "16px", backgroundColor: "#dee2e6" }}
    >
      <Image src={image} alt="Logo" height="size-300" width="size-1500" />
      <Image src={profile} alt="Profile" height="size-500" width="size-600" />
    </Flex>
  );
};

export default Navbar;
