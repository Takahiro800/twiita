import { Box, Container } from "@chakra-ui/layout";
import { VFC } from "react";
import { ArticleType } from "../types/api/articleType";
import { Link } from "@chakra-ui/react";

type Props = {
  article: ArticleType;
};

export const ArticleCard: VFC<Props> = (props) => {
  const { article } = props;

  return (
    <Container m="10px">
      <Box bg="orange.100" borderRadius="20px" p="20px">
        <dd>{article.origin_context}</dd>
        <Link color="teal.500" href={article.origin_link} ml="auto" isExternal>
          オリジナルへ移動する
        </Link>
      </Box>
    </Container>
  );
};
