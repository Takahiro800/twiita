import { ChakraProvider, Button } from "@chakra-ui/react";
import React from "react";

export default function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">ボタン</Button>
    </ChakraProvider>
  );
}
