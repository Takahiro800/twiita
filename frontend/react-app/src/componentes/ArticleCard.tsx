import { Box, Container, Link } from "@chakra-ui/layout";
import { memo, useState, VFC } from "react";
import { ArticleType } from "../types/api/articleType";
import { CreateArticleButton } from "./atom/button/CreateArticleButton";
import axios from "axios";
import { IconButton } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";
import { useMessage } from "./hooks/useMessage";
import { title } from "process";

type Props = {
  article: ArticleType;
};

export const ArticleCard: VFC<Props> = memo((props) => {
  const { article } = props;
  const { showMessage } = useMessage();

  const createArticle = () => {
    axios
      .post<ArticleType>("http://localhost:3000/api/v1/articles", { article })
      .then((res) => {
        showMessage({ title: "保存しました", status: "success" });
        console.log("success!!");
        console.log(res.data);
        console.log(res.data.id);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  return (
    <Container m="10px">
      <Box as="form" bg="orange.100" borderRadius="20px" p="20px">
        <dd>{article.origin_context}</dd>
        <Link color="teal.500" href={article.origin_link} ml="auto" isExternal>
          オリジナルへ移動する
        </Link>
        <p>{article.twitter_id}</p>
        {/* ここにボタンを追加する */}
        <IconButton aria-label="保存ボタン" icon={<CheckIcon />} size="sm" onClick={createArticle} />
      </Box>
    </Container>
  );
});
