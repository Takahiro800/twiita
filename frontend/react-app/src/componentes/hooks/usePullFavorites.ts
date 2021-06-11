import { useState } from "react";
import { Axios } from "../../Axios";
import { ArticleType } from "../../types/api/articleType";

export const usePullFavorites = () => {
  const [articles, setArticles] = useState<Array<ArticleType>>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const pullFavorites = () => {
    setLoading(true);
    setError(false);

    Axios.get<Array<ArticleType>>("/api/v1/favorites")
      .then((res) => {
        const data = res.data.map((article) => ({
          twitter_id: article.twitter_id,
          origin_link: article.origin_link,
          origin_context: article.origin_context,
          icon_url: article.icon_url,
        }));
        setArticles(data);
        console.log(process.env.REACT_APP_AXIOS_BASE_URL);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
        console.log("env変数");
        console.log(process.env.REACT_APP_AXIOS_BASE_URL);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { pullFavorites, articles, loading, error };
};
