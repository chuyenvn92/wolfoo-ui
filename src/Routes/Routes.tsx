import { Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import AboutUs from "../pages/AboutUs";
import Characters from "../pages/Characters";
import Diaries from "../pages/Diaries";
import Activities from "../pages/Activities";
import DiaryDetail from "../pages/DiaryDetail";
import ShopOnline from "../pages/ShopOnline";
import ColoringPicture from "../pages/ColoringPicture";
import DrawIn from "../pages/DrawIn";
import FindDifferent from "../pages/FindDifferent";

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
  },
  {
    path: "/activities",
    caseSensitive: true,
    component: <Activities />,
  },
  {
    path: "/diaries/:slug",
    caseSensitive: true,
    component: <DiaryDetail />,
  },
  {
    path: "/shop",
    caseSensitive: true,
    component: <ShopOnline />,
  },
  {
    path: "/coloring-picture",
    caseSensitive: true,
    component: <ColoringPicture />,
  },
  {
    path: "/draw-in",
    caseSensitive: true,
    component: <DrawIn />,
  },
  {
    path: "/find-the-differences",
    caseSensitive: true,
    component: <FindDifferent />,
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
