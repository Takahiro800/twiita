import { VFC } from "react";
import { ArticleType } from "../types/api/articleType";

type Props = {
  article: ArticleType;
};

export const ArticleCard: VFC<Props> = (props) => {
  const { article } = props;

  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px",
  };

  return (
    <div style={style}>
      <dl>
        <dt>twitter id</dt>
        <dd>{article.twitter_id}</dd>
        <dt>origin link</dt>
        <dd>{article.origin_link}</dd>
        <dt>origin context</dt>
        <dd>{article.origin_context}</dd>
      </dl>
    </div>
  );
};
