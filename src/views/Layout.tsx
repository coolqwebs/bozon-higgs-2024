import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Marquee from "@/components/Marquee/Marquee";
import Header from "@/components/Header";
import { useAppSelector } from "@/store/store";
import { useLazyGetProfileDataQuery } from "@/store/api";
import { useToast } from "@/components/ui/use-toast";

const Layout = () => {
  const { toast } = useToast();
  const [trigger] = useLazyGetProfileDataQuery();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      trigger();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  useEffect(() => {
    if (user?.levelType && user.levelType >= 5) {
      toast({
        variant: "default",
        title: "Congratulations 🎉🎉🎉",
        description:
          "You have completed the game. Wait till the end of the event and claim your reward!",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.levelType]);

  return (
    <div className="container h-screen py-3 font-mono">
      <Header className="h-20 mb-3" />
      <main className="h-[calc(100vh-110px)] w-full flex flex-col gap-5 items-start justify-center">
        <Outlet />
        <Marquee />
      </main>
    </div>
  );
};

export default Layout;
