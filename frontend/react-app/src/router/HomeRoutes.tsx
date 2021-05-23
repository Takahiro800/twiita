import { ArticleDetail } from "../componentes/pages/ArticleDetail";
import { Home } from "../componentes/pages/Home";
import { Page404 } from "../componentes/pages/Page404";
import { Setting } from "../componentes/pages/Setting";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/article/:article_id",
    exact: false,
    children: <ArticleDetail />,
  },
  {
    path: "/timeline",
    exact: false,
    children: <Setting />,
  },
  {
    path: "/favorites",
    exact: false,
    children: <Setting />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
