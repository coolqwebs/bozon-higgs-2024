import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useAuthStore } from "@/store/auth";
import { LogOut } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Mouse from "@/components/Mouse";
import { useState } from "react";

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
      className="w-screen h-screen flex flex-col items-center justify-center gap-10 py-5 font-mono bg-black bg-[url('./hui1.gif')] bg-right-bottom bg-no-repeat"
    >
      {/* <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="fixed -z-50 right-0 bottom-0 min-w-svw min-h-svh"
      >
        <source src="bg.mp4" type="video/mp4" />
      </video> */}
      <header className="w-[80%] h-24 flex items-center justify-between px-3">
        <div>
          <Link to="/">
            <img src={Logo} alt="" className="logo" width="400" />
          </Link>
        </div>
        <img src="./hui.gif" alt="circle" />
        <Mouse x={coordinates.x} y={coordinates.y} />
        <nav>
          <ul className="flex gap-5">
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
      <div>
        <img
          src="./hui1.gif"
          alt="circle1"
          className="absolute bottom-0 left-0 -z-10"
        />
      </div>
    </div>
  );
};

export default Layout;
