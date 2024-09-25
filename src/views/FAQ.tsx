import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-5 flex flex-col items-center backdrop-blur-xl overflow-y-auto">
      <h2 className="text-3xl mb-5 text-center">FAQ</h2>
      <div className="w-[80%]">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="rules">
            <AccordionTrigger>Rules</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-2 px-3">
              <p>
                You must follow a number of rules and restrictions to win a
                prize.
              </p>
              <p>The rules of the game:</p>
              <ul className="flex flex-col gap-2 ml-4 list-disc">
                <li className="">
                  The game starts at 10:30 and ends at 18:00. Only the
                  participants of the 'DevFest 2024 Bishkek' event can join the
                  game.
                </li>
                <li>
                  Only the first 5 participants who successfully completed all 5
                  levels will be awarded a certificate from JetBrains, the
                  winners will be rewarded at the end of the event.
                </li>
                <li>
                  Participants can use their laptops, programming languages and
                  cryptographic tools to solve problems.
                </li>
                <li>
                  The tasks will be unlocked sequentially, and only a successful
                  solution of the previous level will give access to the next
                  one.
                </li>
                <li>
                  Do not use obscene words and expressions in the chat with
                  participants.
                </li>
                <li>
                  You cannot share links, tokens, hints, and level IDs to other
                  participants.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="participate">
            <AccordionTrigger>What do I need to participate?</AccordionTrigger>
            <AccordionContent>
              To participate you need to be a registered participant of DevFest
              2024 and have your own laptop.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="requirements">
            <AccordionTrigger>
              What are the minimum system requirements for participation?
            </AccordionTrigger>
            <AccordionContent>
              A laptop with internet access and installed tools for development
              and cryptography is sufficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="without-laptop">
            <AccordionTrigger>
              Can I participate without a laptop?
            </AccordionTrigger>
            <AccordionContent>
              No, a laptop is required to participate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="prizes">
            <AccordionTrigger>What will the winners get?</AccordionTrigger>
            <AccordionContent>
              The first 5 participants who pass all levels will receive a
              one-year subscription to JetBrains products.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="hints">
            <AccordionTrigger>How do hints work?</AccordionTrigger>
            <AccordionContent>
              Hints will be activated 30 minutes after you begin solving a
              level.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="scoreboard">
            <AccordionTrigger>How does the scoreboard work?</AccordionTrigger>
            <AccordionContent>
              Participants are ranked by the number of solved problems. If two
              players have solved the same number of problems, the one who did
              it earlier will be ranked higher.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="team">
            <AccordionTrigger>Can I work in a team?</AccordionTrigger>
            <AccordionContent>
              Yes, but a team can have a maximum of 3 people.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="time-limit">
            <AccordionTrigger>
              Is there a time limit for solving each problem?
            </AccordionTrigger>
            <AccordionContent>
              No, there is no specific time limit, but it is important to
              remember that gifts will be awarded to the first five people.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="looser">
            <AccordionTrigger>
              What if I don't manage to solve all the tasks before the end of
              the event?
            </AccordionTrigger>
            <AccordionContent>
              The game will be available for two more days after the end of the
              event for those who want to complete the challenges on their own.
              However, prizes will only be awarded to the first 5 participants
              who successfully complete all levels during the event.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="skip">
            <AccordionTrigger>Can I skip a level?</AccordionTrigger>
            <AccordionContent>
              No, each level must be solved to unlock the next. You cannot skip
              levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="attempts">
            <AccordionTrigger>
              How many attempts do I have to solve a problem?
            </AccordionTrigger>
            <AccordionContent>
              There is no limit to the number of attempts, but the time spent on
              the solution is taken into account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="late-arrival">
            <AccordionTrigger>
              Can I start the game later, for example, at 12:00?
            </AccordionTrigger>
            <AccordionContent>
              Yes, but there will be less time to solve all levels as the game
              ends at 18:00.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="impossible">
            <AccordionTrigger>
              What should I do if a problem seems impossible to solve?
            </AccordionTrigger>
            <AccordionContent>
              30 minutes after you start solving a level, hints will be
              activated. You can wait for hints or try a different approach.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="don't-do-this">
            <AccordionTrigger>Can I hack the system?</AccordionTrigger>
            <AccordionContent>
              No, any attempts to hack the system are strictly prohibited
              (Please, just don't do this).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="when-&-how">
            <AccordionTrigger>
              When and how will the winners be announced?
            </AccordionTrigger>
            <AccordionContent>
              The winners will be announced during the closing ceremony at
              18:00.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="who-we-are">
            <AccordionTrigger>Who we are?</AccordionTrigger>
            <AccordionContent>
              <p>We are a team of four great developers:</p>
              <ul className="flex flex-col gap-2 ml-4 list-disc">
                <li>
                  <a
                    href="https://www.linkedin.com/in/n-asankadyrov/"
                    target="_blank"
                  >
                    Nursultan
                  </a>{" "}
                  - Frontend
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/elizat-abakirova-b493aa222/"
                    target="_blank"
                  >
                    Elizat
                  </a>{" "}
                  - Founder, Backend
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aibek-kanatbek-uulu-031135255/"
                    target="_blank"
                  >
                    Aibek
                  </a>{" "}
                  - DevOps
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/tamara-alimkanova-325371261/"
                    target="_blank"
                  >
                    Tamara
                  </a>{" "}
                  - Backend
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p className="text-2xl mt-24">
          Didn't find your question? Ask it on the
          <Button variant="link" className="text-3xl">
            <a
              className="text-2xl"
              href="https://discord.gg/2gKEUxvF"
              target="_blank"
            >
              Discord server
            </a>
          </Button>
          or at the registration desk.
        </p>
      </div>
    </section>
  );
};

export default FAQ;

// - When and how will the winners be announced?
// The winners will be announced during the closing ceremony at 18:00.

// - Who are the creators of the game?
// Elizat Abakirova.
// Nursultan Asankadyrov.
// Tamara Alimkanova.

// Didn't find your question? Ask it in the Discord chat or at the registration desk.
