import { View, Flex, Heading, Text } from "@adobe/react-spectrum";
import { IoIosMore } from "react-icons/io";

const TerminalCard = ({ title, description,image }) => {
  return (
    <View
      backgroundColor="gray-200"
      borderRadius="medium"
      maxWidth="size-3600"
      marginBottom="size-200"
    >
      <Flex
        direction="row"
        alignItems="center"
        position="relative"
        height="100%"
      >
        
        <View marginStart="size-100" paddingX="size-200">
          <Flex direction="column">
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading level={4}>{title}</Heading>
              <IoIosMore className="text-2xl font-bold " />
            </Flex>
            <Text >{description}</Text>
          </Flex>
        </View>
      </Flex>
    </View>
  );
};

export default TerminalCard;
