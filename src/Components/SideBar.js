import React from 'react'
import { IoMdHome } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Flex, View, Text, Heading } from "@adobe/react-spectrum";


const SideBar = () => {
  return (
    <View padding="size-200" cursor="pointer">
      <Flex direction="column" gap="size-300">
        <Flex direction="column" gap="size-150">
          <Flex alignItems="center" gap="size-100">
            <IoMdHome size={24} color="black" />
            <Text>Home</Text>
          </Flex>
          <Flex alignItems="center" gap="size-100">
            <RxDashboard size={20} color="black" />
            <Text>Dashboard</Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="size-150">
          <Heading
            level={4}
            UNSAFE_style={{ fontWeight: "bold", padding: "5px" }}
          >
            Services
          </Heading>
          <Link to="/airports" className="hover:bg-slate-200 px-1 py-1 rounded ">
            Airports
          </Link>
          <Text UNSAFE_style={{ padding: "5px" , cursor:"pointer"}}>Videos</Text>
        </Flex>
        <Flex direction="column" gap="size-150">
          <Heading
            level={4}
            UNSAFE_style={{ fontWeight: "bold", padding: "5px" }}
          >
            Others
          </Heading>
          <Text UNSAFE_style={{ padding: "5px" , cursor:"pointer"}}>List1</Text>
          <Text UNSAFE_style={{ padding: "5px",cursor:"pointer" }}>List2</Text>
          <Text UNSAFE_style={{ padding: "5px",cursor:"pointer" }}>List3</Text>
        </Flex>
      </Flex>
    </View>
  );
};

export default SideBar;
