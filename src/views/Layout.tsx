import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useAuthStore } from "@/store/auth";
import { LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Layout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  console.log(isDarkMode);
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-10 py-5 font-mono">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="fixed -z-40 right-0 bottom-0 min-w-[100%] min-h-svh"
      >
        <source src="bg.mp4" type="video/mp4" />
      </video>
      <header className="w-[80%] h-24 flex items-center justify-between px-3">
        <div>
          {/* <h1 className="text-3xl font-bold text-slate-700 dark:text-white"> */}
          <Link to="/">
            <img
              src={Logo}
              alt=""
              // style={
              //   isDarkMode
              //     ? {
              //         filter: `invert(99%) sepia(1%) saturate(2%) hue-rotate(226deg) brightness(108%) contrast(100%)`,
              //       }
              //     : {
              //         filter: "none",
              //       }
              // }
              className="logo"
              width="400"
            />
          </Link>
          {/* </h1> */}
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <ModeToggle />
            </li>
            {isAuthenticated && (
              <li>
                <Button variant="outline" size="icon">
                  <LogOut className="w-[1.4rem] h-[1.4rem]" />
                </Button>
              </li>
            )}
            <li className="text-xl">
              <Link to="/scoreboard">Scoreboard</Link>
            </li>
            <li className="text-xl">
              <Link to="/challenges">Challenges</Link>
            </li>
            <li className="text-xl">
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="w-[80%] h-[80%] flex items-start justify-center">
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
