import { Button } from "@/components/ui/button";

const Main = () => {
  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-3 md:py-5 lg:py-10 md:px-12 xl:px-32 backdrop-blur-3xl">
      <article className="h-full flex flex-col gap-5 overflow-auto text-2xl">
        <p>
          The
          <span className="text-lime-500 dark:text-[#C3D82C]">
            {" "}
            "Boson-Higgs"{" "}
          </span>
          is an exciting and intriguing game inspired by the spirit of the
          mysterious Cicada 3301 puzzles. The game contains 5 levels with
          puzzles and tasks in the field of cryptography and programming.
        </p>
        <p>
          The tasks will become more difficult, so get ready for the real
          challenge. The first 5 participants who successfully completed all 5
          levels will be awarded a certificate from JetBrains, the winners will
          be rewarded at the end of the event.
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
          className="w-[90%] 2xl:w-[50%] mx-auto object-contain border border-gray-500 dark:border-slate-300"
          src="hazker.webp"
          alt="hazker"
        />
        <p>
          If you feel like the guy above, join the "Higgs Boson" - where bits
          and bytes create a symphony of cryptography, and the code is the key
          to the solution!
        </p>
        <p>P.S.</p>
        <p>
          There is also a
          <Button variant="link" className="text-3xl">
            <a
              className="text-2xl"
              href="https://discord.gg/2gKEUxvF"
              target="_blank"
            >
              Discord server
            </a>
          </Button>
          where you can connect with other players.
        </p>
      </article>
    </section>
  );
};

export default Main;
