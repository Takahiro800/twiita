import axios from "axios";
import { useCallback, useState } from "react";
import { ArticleType } from "../../types/api/articleType";

export const useSearch = () => {
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const search = useCallback((keyword: string) => {
    axios
      .get<ArticleType[]>("http://localhost:3000/api/v1/articles/search", {
        params: {
          keyword: keyword,
        },
      })
      .then((res) => {
        const data = res.data.map((article) => ({
          twitter_id: article.twitter_id,
          origin_link: article.origin_link,
          origin_context: article.origin_context,
        }));
        console.log(`${keyword}の検索結果です`);
        console.log(data);
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
  return { search, articles, loading, error };
};
