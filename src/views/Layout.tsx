import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Marquee from "@/components/Marquee/Marquee";
import Header from "@/components/Header";
import { useAppSelector } from "@/store/store";
import { useLazyGetProfileDataQuery } from "@/store/api";

const Layout = () => {
  const [trigger] = useLazyGetProfileDataQuery();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      trigger();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);
  // bg-[url('/noise1.gif')]
  return (
    <div className="container h-screen py-3 font-mono">
      <Header className="h-20 mb-3" />
      <main className="h-[calc(100vh-100px)] w-full flex flex-col gap-5 items-start justify-center">
        <Outlet />
        <Marquee />
      </main>
    </div>
  );
};

export default Layout;
