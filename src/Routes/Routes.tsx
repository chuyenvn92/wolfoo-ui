import { Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";

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
