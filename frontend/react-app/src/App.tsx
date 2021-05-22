import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import theme from "./theme/theme";
import { ArticleType } from "./types/api/articleType";
import { ArticleCard } from "./componentes/ArticleCard";
import { useState } from "react";
import { usePullArticles } from "./componentes/hooks/usePullArticles";

export default function App() {
  const { pullArticles, articles, loading, error } = usePullArticles();

  const onClickArticles = () => pullArticles();

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
      <br />
      <button onClick={createArticles}>create</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {articles.map((article) => (
            <ArticleCard key={article.twitter_id} article={article} />
          ))}
        </>
      )}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
