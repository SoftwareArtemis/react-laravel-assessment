// ##### App Components #####
import Home from "./components/Home";
import About from "./components/About";
import ExampleData from "./components/ExampleData";

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const navConfig = [
  {
    name: "Example data",
    path: "/data",
    component: ExampleData,
  },
  {
    name: "About us",
    path: "/about",
    component: About,
  },
  {
    //<-- default
    name: "Root",
    path: "/",
    component: Home,
  },
];

export default navConfig;
