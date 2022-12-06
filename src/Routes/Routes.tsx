import { Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Characters from "../pages/Characters";
import Diaries from "../pages/Diaries";

const Routes = [
  {
    path: "/",
    caseSensitive: true,
    component: <Homepage />,
  },
  {
    path: "/about-us",
    caseSensitive: true,
    component: <AboutUs />,
  },
  {
    path: "/characters",
    caseSensitive: true,
    component: <Characters />,
  },
  {
    path: "/diaries",
    caseSensitive: true,
    component: <Diaries />,
  }
];

const routes = Routes.map((route) => (
  <Route
    key={route.path}
    path={route.path}
    caseSensitive={route.caseSensitive}
    element={route.component}
  />
));

export default routes;
