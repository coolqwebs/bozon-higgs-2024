import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useAuthStore } from "@/store/auth";
import { LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Mouse from "@/components/Mouse";
import { useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";

const Layout = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-screen h-screen flex flex-col items-center justify-center gap-10 py-5 font-mono bg-[url('noise1.gif')] bg-cover"
    >
      {/* <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="fixed -z-50 left-0 top-0 min-w-full min-h-full"
      >
        <source src="./code.mp4" type="video/mp4" />
      </video> */}
      <header className="w-[80%] flex items-center justify-between px-12 py-2 border-[2px] border-gray-500 dark:border-slate-300 rounded-xl backdrop-blur-xl">
        <div className="flex items-center justify-center gap-8">
          <Link to="/">
            <img src={Logo} alt="" className="logo" width="400" />
          </Link>
        </div>
        <Mouse x={coordinates.x} y={coordinates.y} />
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
