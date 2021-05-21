import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import theme from "./theme/theme";

export default function App() {
  const onClickArticles = () => {
    axios
      .get("http://localhost:3000/api/v1/articles")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <button onClick={onClickArticles}>articles</button>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
