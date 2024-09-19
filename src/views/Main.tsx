import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Main = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <section className="w-full h-full flex items-center justify-center gap-5">
      <section className="border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-10 flex-1 h-full backdrop-blur-3xl">
        <article className="h-full flex flex-col gap-5 overflow-auto">
          <p>
            The{" "}
            <span className="text-lime-500 dark:text-[#C3D82C]">
              "Boson-Higgs"
            </span>{" "}
            is an exciting and intriguing game inspired by the spirit of the
            mysterious Cicada 3301 puzzles. The game contains 5 levels with
            puzzles and tasks in the field of cryptography and programming.
          </p>
          <p>
            The tasks will become more difficult, so get ready for the real
            challenge. The first 5 participants who successfully completed all 5
            levels will be awarded a certificate from JetBrains, the winners
            will be rewarded at the end of the event.
          </p>
          <p>You will find:</p>
          <ul>
            <li>- Cryptographic puzzles</li>
            <li>- Solving problems using algorithms</li>
            <li>- Images and text tasks</li>
            <li>- And much more</li>
          </ul>
          <p>What you need to play:</p>
          <ul>
            <li>- Laptop or computer</li>
            <li>- Knowledge of programming languages</li>
            <li>- Some knowledge of cryptography</li>
            <li>- Internet connection</li>
            <li>- The desire for victory :&#41;</li>
          </ul>
          <img
            className="contain border border-gray-500 dark:border-slate-300"
            src="hazker.webp"
            alt="hazker"
          />
          <p>
            If you feel like the guy above, join the "Higgs Boson" - where bits
            and bytes create a symphony of cryptography, and the code is the key
            to the solution!
          </p>
        </article>
      </section>
      <section className="border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-10 flex-1 h-full backdrop-blur-3xl">
        <h2 className="text-3xl text-center mb-5">Sign in/up</h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}

        {isLogin ? (
          <p className="text-center text-xl mt-5">
            Don't have an account?
            <Button
              className="text-xl"
              onClick={() => setIsLogin(false)}
              variant="link"
            >
              Sign up
            </Button>
          </p>
        ) : (
          <p className="text-center text-xl mt-5">
            Already have an account?
            <Button
              className="text-xl"
              onClick={() => setIsLogin(true)}
              variant="link"
            >
              Sign in
            </Button>
          </p>
        )}
      </section>
    </section>
  );
};

export default Main;
