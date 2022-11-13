import { Box, Image, Text } from "@chakra-ui/react";

const AnimalCards = ({ type }) => {
  return (
    <Box w="fit-content">
      <Image src={`images/${type}.jpeg`} alt={type} />
      <Text textAlign="center" mt={4} fontSize="2xl">
        {type}
      </Text>
    </Box>
  );
};

export default AnimalCards;
