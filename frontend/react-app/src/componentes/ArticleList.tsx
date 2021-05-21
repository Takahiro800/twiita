import { memo, VFC } from "react";
import { Article } from "../types/api/article";

type Props = {
  articles: Article[];
};

// export const ArticleList: VFC<Props> = memo((props) => {
//   const { articles } = props;

//   return { articles };
// });
