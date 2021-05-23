import { ChakraProvider } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import theme from "../../theme/theme";
import { ArticleCard } from "../ArticleCard";
import { usePullFavorites } from "../hooks/usePullFavorites";

export const Favorite: VFC = memo(() => {
  const { pullFavorites, articles, loading, error } = usePullFavorites();

  const onClickPullTimelines = () => pullFavorites();

  useEffect(() => onClickPullTimelines(), []);

  return (
    <ChakraProvider theme={theme}>
      {error ? (
        <p style={{ color: "red" }}>データの読み込みに失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {articles.map((article) => (
            <ArticleCard key={article.twitter_id} article={article} />
          ))}
        </>
      )}
    </ChakraProvider>
  );
});
