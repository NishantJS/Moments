import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading.jsx";
const NotFound = lazy(() => import("./NotFound.jsx"));
const Create = lazy(() => import("./Create.jsx"));
const Moments = lazy(() => import("./Moments.jsx"));
const Options = lazy(() => import("./Options.jsx"));
const Login = lazy(() => import("../components/Login.jsx"));

const routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Moments} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/moments" component={Moments} />
        <Route exact path="/options" component={Options} />
        <Route exact path="/options/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default routes;
