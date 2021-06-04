import { Box, Container, Link } from "@chakra-ui/layout";
import { memo, VFC } from "react";
import { ArticleType } from "../types/api/articleType";
import axios from "axios";
import { IconButton } from "@chakra-ui/button";
import { CheckIcon } from "@chakra-ui/icons";
import { useMessage } from "./hooks/useMessage";
import { Image } from "@chakra-ui/image";

type Props = {
  article: ArticleType;
};

type ResponseType = {
  message: string;
  status: "info" | "warning" | "success" | "error";
};

export const ArticleCard: VFC<Props> = memo((props) => {
  const { article } = props;
  const { showMessage } = useMessage();

  const createArticle = () => {
    axios
      .post<ResponseType>("http://localhost:3000/api/v1/articles", { article })
      .then((res) => {
        showMessage({ title: res.data.message, status: res.data.status });
      })
      .catch((err) => {
        console.log(err);
        showMessage({ title: "errorです", status: "error" });
      });
  };

  return (
    <Container m="10px">
      <Box as="form" bg="orange.100" borderRadius="20px" p="20px">
        <Image borderRadius="full" boxSize="30px" src={article.icon_url} alt="user_icon" />
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
