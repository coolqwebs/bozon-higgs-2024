import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import {
  useGetMyLevelsQuery,
  useLazyGetLevelHintQuery,
  useSubmitNextLevelTokenMutation,
} from "@/store/api";
import { useAppSelector } from "@/store/store";
import { CircleCheckBig } from "lucide-react";
import { useRef, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
const blankLevels = [
  {
    token: "",
    id: "1-blank",
    name: "Level 1",
    description: "",
    link: "",
    type: 0,
  },
  {
    token: "",
    id: "2-blank",
    name: "Level 2",
    description: "",
    link: "",
    type: 0,
  },
  {
    token: "",
    id: "3-blank",
    name: "Level 3",
    description: "",
    link: "",
    type: 0,
  },
  {
    token: "",
    id: "4-blank",
    name: "Level 4",
    description: "",
    link: "",
    type: 0,
  },
  {
    token: "",
    id: "5-blank",
    name: "Level 5",
    description: "",
    link: "",
    type: 0,
  },
];
const Challenges = () => {
  const { toast } = useToast();
  const { data, isLoading, refetch } = useGetMyLevelsQuery();

  const user = useAppSelector((state) => state.auth.user);

  const [submitToken, result] = useSubmitNextLevelTokenMutation();
  const [getHint, hintResult] = useLazyGetLevelHintQuery();
  const [tab, setTab] = useState(0);

  const timerRef = useRef(true);

  const submitTokenHandler = async (e: any) => {
    e.preventDefault();

    if (!timerRef.current) {
      toast({
        variant: "destructive",
        title: "Wait",
        description: "You can submit again in a few seconds.",
      });
      return;
    }

    const token = e.target.token.value;
    if (!token.trim()) {
      toast({
        variant: "destructive",
        title: "Token is required to proceed to next level!",
        description: 'Type something in the "Token" field',
      });
      return;
    }

    timerRef.current = false;
    setTimeout(() => {
      timerRef.current = true;
    }, 10000);

    try {
      const res = await submitToken(token).unwrap();
      toast({
        variant: "default",
        title: "Success",
        description: "Token submitted successfully",
      });
      refetch();
      console.log(res);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.data.errors[""][0],
      });
    }
  };

  const getHintHandler = async (levelId: string) => {
    try {
      const hint = await getHint(levelId).unwrap();
      toast({
        variant: "default",
        title: "Hint",
        description: <Markdown remarkPlugins={[remarkGfm]}>{hint}</Markdown>,
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: error.data.errors[""][0],
      });
    }
  };

  if (isLoading) {
    return (
      <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl flex justify-center items-center backdrop-blur-xl">
        <Spinner />
      </section>
    );
  }
  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-5 flex flex-col items-center backdrop-blur-xl overflow-auto">
      <div className="w-full h-full flex">
        <aside className="min-w-min border-r-[2px] border-collapse border-gray-500 dark:border-slate-300">
          <ul className="h-full flex flex-col gap-5">
            {data?.map((level, index) => (
              <li
                key={level.id}
                className={cn(
                  "w-full h-[20%]  flex items-center justify-center",
                  tab === index &&
                    "border-l-[15px] border-gray-500 dark:border-slate-300 border-collapse"
                )}
              >
                <Button
                  onClick={() => setTab(index)}
                  variant="link"
                  className={cn(
                    "text-4xl leading-none text-slate-900 dark:text-slate-300",
                    tab === index && "text-red-500"
                  )}
                >
                  {level.name}
                </Button>
              </li>
            ))}
            {blankLevels.slice(data?.length)?.map((level) => (
              <li
                key={level.id}
                className={cn(
                  "w-full h-[20%] flex items-center justify-center"
                )}
              >
                <Button
                  disabled={true}
                  variant="link"
                  className={cn(
                    "text-4xl leading-none text-slate-900 dark:text-slate-300"
                  )}
                >
                  {level.name}
                </Button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="w-[75%] h-full">
          {data?.map(
            (level, index) =>
              tab === index && (
                <article
                  key={level.id}
                  className="w-full h-full py-5 px-10 flex flex-col gap-5"
                >
                  <h3 className="text-2xl mb-5 text-center">{level.name}</h3>
                  <div className="w-full h-[80%] overflow-auto">
                    <Markdown remarkPlugins={[remarkGfm]} className={"text-xl"}>
                      {level.description}
                    </Markdown>
                  </div>
                  {(user?.levelType as number) > level.type ? (
                    <div className="w-full flex-1 flex flex-col gap-5 justify-center items-center">
                      <CircleCheckBig size="4rem" className="text-green-400" />
                      <p className="text-green-400">
                        Token is sent. Problem is solved
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={submitTokenHandler}
                      className="flex flex-1 justify-center items-center w-full gap-5"
                    >
                      <Label className="text-xl">Token:</Label>
                      <Input
                        name="token"
                        placeholder="Enter token"
                        className="w-[50%] py-3 px-5 placeholder:text-xl"
                      />
                      <Button size="lg">
                        {result.isLoading ? <Spinner /> : "Submit"}
                      </Button>
                      <Button
                        type="button"
                        size="lg"
                        onClick={() => getHintHandler(level.id)}
                      >
                        {hintResult.isLoading ? <Spinner /> : "Get Hint"}
                      </Button>
                    </form>
                  )}
                </article>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
{
  /* <div className="w-full h-[25%] flex flex-col gap-5 justify-center items-center">
<CircleCheckBig size="5rem" className="text-green-400" />
<p className="text-green-400">
  Token is sent. Problem is solved
</p>
</div> */
}
