import RegisterForm from "@/components/RegisterForm";
import Logo from "@/assets/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-[100svw] h-[100svh] flex flex-col gap-10 justify-center items-center">
      <Link to="/">
        <img src={Logo} alt="" className="logo" width="400" height="20" />
      </Link>
      <section className="w-[500px] h-[500px] border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-10 backdrop-blur-3xl">
        <RegisterForm />
      </section>
    </div>
  );
};

export default Register;
