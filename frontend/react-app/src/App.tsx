import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import theme from "./theme/theme";
import { ArticleCard } from "./componentes/ArticleCard";
import { usePullFavorites } from "./componentes/hooks/usePullFavorites";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  const { pullFavorites, articles, loading, error } = usePullFavorites();

  const onClickPullFavorites = () => pullFavorites();

  return (
		<UserProvider>
			<ChakraProvider theme={theme}>
				{error ? (
					<p style={{ color: "red" }}>データの取得に失敗しました</p>
				) : loading ? (
					<p>Loading...</p>
				) : (
					<>
						{articles.map((article) => (
							<ArticleCard key={article.twitter_id} article={article} />
						))}
					</>
				)}
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</ChakraProvider>

		</UserProvider>
  );
}
