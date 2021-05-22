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

  const createArticles = () => {
    axios
      .post("http://localhost:3000/api/v1/articles")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ChakraProvider theme={theme}>
      <button onClick={onClickArticles}>index</button>
      <button onClick={createArticles}>create</button>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
