import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";
import { useState } from "react";

const Challenges = () => {
  const [tab, setTab] = useState(1);
  // const { toast } = useToast();

  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-5 flex flex-col items-center">
      <div className="w-full h-full flex">
        <aside className="w-[25%] bg-muted">
          <ul className="h-full flex flex-col gap-5">
            <li className="w-full h-[20%] flex items-center justify-center">
              <Button
                onClick={() => setTab(1)}
                variant="ghost"
                className={cn(
                  "text-4xl leading-none",
                  tab === 1 && "text-red-500"
                )}
              >
                Problem 1
              </Button>
            </li>
            <li className="w-full h-[20%]  flex items-center justify-center">
              <Button
                onClick={() => setTab(2)}
                variant="ghost"
                className={cn(
                  "text-4xl leading-none",
                  tab === 2 && "text-red-500"
                )}
              >
                Problem 2
              </Button>
            </li>
            <li className="w-full h-[20%] flex items-center justify-center">
              <Button
                onClick={() => setTab(3)}
                variant="ghost"
                className={cn(
                  "text-4xl leading-none",
                  tab === 3 && "text-red-500"
                )}
              >
                Problem 3
              </Button>
            </li>
            <li className="w-full h-[20%] flex items-center justify-center">
              <Button
                onClick={() => setTab(4)}
                variant="ghost"
                className={cn(
                  "text-4xl leading-none",
                  tab === 4 && "text-red-500"
                )}
              >
                Problem 4
              </Button>
            </li>
            <li className="w-full h-[20%] flex items-center justify-center">
              <Button
                onClick={() => setTab(5)}
                variant="ghost"
                className={cn(
                  "text-4xl leading-none",
                  tab === 5 && "text-red-500"
                )}
              >
                Problem 5
              </Button>
            </li>
          </ul>
        </aside>
        <div className="w-[75%] h-full">
          {tab === 1 && (
            <article className="w-full h-full p-10 relative">
              <h3 className="text-2xl mb-5 text-center">Problem 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                molestiae dicta reiciendis, mollitia asperiores expedita
                eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                dolores, laborum aspernatur ea perspiciatis est exercitationem,
                consequuntur velit laboriosam architecto fugiat. Nesciunt,
                velit. Tempore quod odit fuga? Qui laboriosam voluptate porro.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                molestiae dicta reiciendis, mollitia asperiores expedita
                eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                dolores, laborum aspernatur ea perspiciatis est exercitationem,
                consequuntur velit laboriosam architecto fugiat. Nesciunt,
                velit. Tempore quod odit fuga? Qui laboriosam voluptate porro.
              </p>

              <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="flex justify-center items-center w-full gap-5 absolute bottom-5"
              >
                <Label>Token:</Label>
                <Input placeholder="Enter token" className="w-[50%]" />
                <Button type="button" size="lg">
                  Send
                </Button>
              </form>
            </article>
          )}
          {tab === 2 && (
            <article className="w-full h-full px-10 py-5 relative">
              <h3 className="text-2xl mb-5 text-center">Problem 2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                molestiae dicta reiciendis, mollitia asperiores expedita
                eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                dolores, laborum aspernatur ea perspiciatis est exercitationem,
                consequuntur velit laboriosam architecto fugiat. Nesciunt,
                velit. Tempore quod odit fuga? Qui laboriosam voluptate porro.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                molestiae dicta reiciendis, mollitia asperiores expedita
                eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                dolores, laborum aspernatur ea perspiciatis est exercitationem,
                consequuntur velit laboriosam architecto fugiat. Nesciunt,
                velit. Tempore quod odit fuga? Qui laboriosam voluptate porro.
              </p>
              <div className="w-full flex flex-col gap-5 justify-center items-center absolute bottom-5">
                <CircleCheckBig size="5rem" className="text-green-400" />
                <p className="text-green-400">
                  Token is sent. Problem is solved
                </p>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
