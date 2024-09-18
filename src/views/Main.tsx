import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Main = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <section className="w-full h-full flex items-center justify-center gap-5"></section>
  );
};

export default Main;
