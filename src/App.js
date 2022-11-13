import WhodRather from "./components/Whodrather";
import { ChakraProvider, Flex } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
 <Flex minH="100vh" justifyContent ="center"
        justifyContents="center"
        alignItems="center"
        fontSize="3xl"
      >
        Which animal would you rather?{" "}
      </Flex>
      <WhodRather />
    </ChakraProvider>
  );
}

export default App;
