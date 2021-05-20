import { ChakraProvider, Button } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Button colorScheme="teal">ボタン</Button>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
