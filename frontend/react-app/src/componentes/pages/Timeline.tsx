import { ChakraProvider } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";
import theme from "../../theme/theme";
import { ArticleCard } from "../ArticleCard";

import { usePullTimelines } from "../hooks/usePullTimelines";

export const Timeline: VFC = memo(() => {
  const { pullTimelines, articles, loading, error } = usePullTimelines();

  const onClickPullTimelines = () => pullTimelines();

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
