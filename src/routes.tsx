import { createBrowserRouter } from "react-router-dom";
import Layout from "@/views/Layout";
import Main from "./views/Main";
import FAQ from "./views/FAQ";
import Challenges from "./views/Challenges";
import Scoreboard from "./views/Scoreboard";
import WithAuth from "./components/WithAuth";
import Register from "./views/Register";
import Login from "./views/Login";
import Profile from "./views/Profile";
import EditorPage from "./views/Editor";

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
          <WithAuth>
            <Challenges />
          </WithAuth>
        ),
      },
      {
        path: "profile",
        element: (
          <WithAuth>
            <Profile />
          </WithAuth>
        ),
      },
      {
        path: "scoreboard",
        element: <Scoreboard />,
      },
      {
        path: "editor",
        element: <EditorPage />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
