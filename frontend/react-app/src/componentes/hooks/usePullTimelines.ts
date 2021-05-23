import { useCallback, useState } from "react";
import { ArticleType } from "../../types/api/articleType";
import axios from "axios";

export const usePullTimelines = () => {
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const pullTimelines = useCallback(() => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<ArticleType>>("http://localhost:3000/api/v1/timelines")
      .then((res) => {
        const data = res.data.map((article) => ({
          twitter_id: article.twitter_id,
          origin_link: article.origin_link,
          origin_context: article.origin_context,
        }));
        setArticles(data);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { pullTimelines, articles, loading, error };
};
