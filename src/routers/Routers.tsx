import { Header, Main } from "@/components/layout";
import React, { useMemo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { routerConfigs } from "./routerConfigs";
import { useRouters } from "./hooks";
import { AuthPermissions } from "@/constants";
export const Routers = () => {
  const { states } = useRouters();

  return (
    <Switch>
      {routerConfigs.map((router) => {
        if (
          router.permissions.includes(AuthPermissions.ALL) ||
          router.permissions.includes(states.authPermission)
        ) {
          return (
            <Route
              exact={router.exact}
              path={router.path}
              component={() => (
                <>
                  {!router.isHideHeader && useMemo(() => <Header />, [])}
                  <Main>{router.page()}</Main>
                </>
              )}
            />
          );
        } else {
          return (
            <Route
              exact={router.exact}
              path={router.path}
              component={() => <Redirect to={router.pathRedirect} />}
            />
          );
        }
      })}
    </Switch>
  );
};
