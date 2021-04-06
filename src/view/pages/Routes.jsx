import { Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading.jsx";
const NotFound = lazy(() => import("./NotFound.jsx"));
const Home = lazy(() => import("./Home.jsx"));


const routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default routes;
