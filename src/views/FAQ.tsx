import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-5 flex flex-col items-center backdrop-blur-xl overflow-y-auto">
      <h2 className="text-3xl mb-5 text-center">FAQ</h2>
      <div className="w-[80%]">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
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
          <AccordionItem value="item-2">
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
      </div>
    </section>
  );
};

export default FAQ;
