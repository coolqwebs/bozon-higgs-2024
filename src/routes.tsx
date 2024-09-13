import { createBrowserRouter } from "react-router-dom";
import Layout from "@/views/Layout";
import Main from "./views/Main";
import FAQ from "./views/FAQ";
import Challenges from "./views/Challenges";
import Scoreboard from "./views/Scoreboard";
import WithAuth from "./components/WithAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "challenges",
        element: (
          // <WithAuth>
          <Challenges />
          // </WithAuth>
        ),
      },
      {
        path: "scoreboard",
        element: <Scoreboard />,
      },
    ],
  },
]);
