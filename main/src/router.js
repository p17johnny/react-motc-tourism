import React, { lazy, Suspense } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Route, Redirect, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import MainLayout from "./pages/layout";
import "./style.css";

const routes = [
  {
    path: "/home",
    Component: lazy(() => import("./pages/home")),
    exact: true,
  },
  {
    path: "/scenicSpot",
    Component: lazy(() => import("./pages/allspot")),
    exact: true,
  },
  {
    path: "/scenicSpot/:city",
    Component: lazy(() => import("./pages/city")),
    exact: true,
  },
];

const Router = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <MainLayout>
        <Route
          render={(state) => {
            const { location } = state;
            return (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  // appear
                  addEndListener={(node, done) =>
                    node.addEventListener("transitionend", done, false)
                  }
                  classNames="fade"
                  timeout={1000}
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={() => <Redirect to="/home" />}
                    />
                    {routes.map(({ path, Component, exact }) => (
                      <Route
                        path={path}
                        key={path}
                        exact={exact}
                        render={() => {
                          return (
                            <Suspense fallback={null}>
                              <Component />
                              {/* <div>{location.pathname}</div> */}
                            </Suspense>
                          );
                        }}
                      />
                    ))}
                    <Redirect to="/home" />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            );
          }}
        />
      </MainLayout>
    </ConnectedRouter>
  );
};

export default Router;
