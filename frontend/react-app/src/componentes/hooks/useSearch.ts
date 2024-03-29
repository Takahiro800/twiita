import { useCallback, useState } from "react";
import { Axios } from "../../Axios";
import { ArticleType } from "../../types/api/articleType";

export const useSearch = () => {
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const search = useCallback((keyword: string) => {
    Axios.get<ArticleType[]>("/api/v1/articles/search", {
      withCredentials: true,
      params: {
        keyword: keyword,
      },
    })
      .then((res) => {
        const data = res.data.map((article) => ({
          twitter_id: article.twitter_id,
          origin_link: article.origin_link,
          origin_context: article.origin_context,
          icon_url: article.icon_url,
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
