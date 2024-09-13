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
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-5 flex flex-col items-center backdrop-blur-lg">
      <div className="w-full h-full flex">
        <aside className="w-[25%] border-r-[2px] border-collapse border-gray-500 dark:border-slate-300">
          <ul className="h-full flex flex-col gap-5">
            <li
              className={cn(
                "w-full h-[20%]  flex items-center justify-center",
                tab === 1 && "border-l-[15px] border-slate-300 border-collapse"
              )}
            >
              <Button
                onClick={() => setTab(1)}
                variant="link"
                className={cn(
                  "text-4xl leading-none text-slate-300",
                  tab === 1 && "text-red-500"
                )}
              >
                Problem 1
              </Button>
            </li>
            <li
              className={cn(
                "w-full h-[20%]  flex items-center justify-center",
                tab === 2 && "border-l-[15px] border-slate-300 border-collapse"
              )}
            >
              <Button
                onClick={() => setTab(2)}
                variant="link"
                className={cn(
                  "text-4xl leading-none text-slate-300",
                  tab === 2 && "text-red-500"
                )}
              >
                Problem 2
              </Button>
            </li>
            <li
              className={cn(
                "w-full h-[20%]  flex items-center justify-center",
                tab === 3 && "border-l-[15px] border-slate-300 border-collapse"
              )}
            >
              <Button
                onClick={() => setTab(3)}
                variant="link"
                className={cn(
                  "text-4xl leading-none text-slate-300",
                  tab === 3 && "text-red-500"
                )}
              >
                Problem 3
              </Button>
            </li>
            <li
              className={cn(
                "w-full h-[20%]  flex items-center justify-center",
                tab === 4 && "border-l-[15px] border-slate-300 border-collapse"
              )}
            >
              <Button
                onClick={() => setTab(4)}
                variant="link"
                className={cn(
                  "text-4xl leading-none text-slate-300",
                  tab === 4 && "text-red-500"
                )}
              >
                Problem 4
              </Button>
            </li>
            <li
              className={cn(
                "w-full h-[20%]  flex items-center justify-center",
                tab === 5 && "border-l-[15px] border-slate-300 border-collapse"
              )}
            >
              <Button
                onClick={() => setTab(5)}
                variant="link"
                className={cn(
                  "text-4xl leading-none text-slate-300",
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
              <div className="w-full h-[75%] overflow-auto">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
              </div>

              <form
                // onSubmit={form.handleSubmit(onSubmit)}
                className="flex justify-center items-center w-full h-[25%] gap-5"
              >
                <Label className="text-xl">Token:</Label>
                <Input
                  placeholder="Enter token"
                  className="w-[50%] py-3 px-5 placeholder:text-xl"
                />
                <Button type="button" size="lg" className="boxShadow">
                  Send
                </Button>
              </form>
            </article>
          )}
          {tab === 2 && (
            <article className="w-full h-full p-10 relative">
              <h3 className="text-2xl mb-5 text-center">Problem 2</h3>
              <div className="w-full h-[75%] overflow-auto">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum nobis nisi magnam dignissimos deleniti excepturi
                  molestiae dicta reiciendis, mollitia asperiores expedita
                  eveniet, aperiam quaerat eligendi? Aliquid, assumenda? Totam
                  dolores, laborum aspernatur ea perspiciatis est
                  exercitationem, consequuntur velit laboriosam architecto
                  fugiat. Nesciunt, velit. Tempore quod odit fuga? Qui
                  laboriosam voluptate porro.
                </p>
              </div>
              <div className="w-full h-[25%] flex flex-col gap-5 justify-center items-center">
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
