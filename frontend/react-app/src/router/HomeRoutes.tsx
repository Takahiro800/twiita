import { ArticleDetail } from "../componentes/pages/ArticleDetail";
import { Page404 } from "../componentes/pages/Page404";
import { Timeline } from "../componentes/pages/Timeline";
import { Favorite } from "../componentes/pages/Favorite";
import { Setting } from "../componentes/pages/Setting";
import { Home } from "../componentes/pages/Home";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />,
  },
  {
    path: "/timeline",
    exact: false,
    children: <Timeline />,
  },
  {
    path: "/favorites",
    exact: false,
    children: <Favorite />,
  },
  {
    path: "/article/:article_id",
    exact: false,
    children: <ArticleDetail />,
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
];
