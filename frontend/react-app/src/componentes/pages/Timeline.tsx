import { ChakraProvider } from "@chakra-ui/react";
import { memo, useContext, useEffect, VFC } from "react";
import { UserContext } from "../../providers/UserProvider";
import theme from "../../theme/theme";
import { ArticleCard } from "../ArticleCard";

import { usePullTimelines } from "../hooks/usePullTimelines";

export const Timeline: VFC = memo(() => {
  const { pullTimelines, articles, loading, error } = usePullTimelines();

  const onClickPullTimelines = () => pullTimelines();
  const loginStatus = useContext(UserContext);
  console.log(loginStatus);

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
