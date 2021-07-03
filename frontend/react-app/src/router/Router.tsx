import { memo, VFC } from "react";
import { Route, Switch } from "react-router";
import { Home } from "../componentes/pages/Home";
import { Page404 } from "../componentes/pages/Page404";
import { Root } from "../componentes/pages/Root";
import { Timeline } from "../componentes/pages/Timeline";
import { HeaderLayout } from "../componentes/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Root />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
