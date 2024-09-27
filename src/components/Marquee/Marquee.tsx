import { useEffect, useRef, useState } from "react";
import styles from "./Marquee.module.scss";
import { cn } from "@/lib/utils";
import { useSendMarqueeMessageMutation } from "@/store/api";
import { HubConnection } from "@microsoft/signalr";
import { createSignalRConnection } from "@/lib/socket";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useToast } from "../ui/use-toast";
import { useAppSelector } from "@/store/store";

const Marquee = () => {
  const { toast } = useToast();
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const [marquees, setMarquees] = useState<string>("");
  const [connection, setConnection] = useState<HubConnection | null>(null);
  const [sendMessage, result] = useSendMarqueeMessageMutation();

  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessageHandler = async (e: any) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      try {
        await sendMessage(inputRef?.current?.value).unwrap();
        inputRef.current.value = "";
        inputRef.current.focus();
      } catch (error: any) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: error.data.errors[""][0],
        });
      }
    }
  };

  useEffect(() => {
    const client = createSignalRConnection();
    setConnection(client);

    return () => {
      if (client) {
        client.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (connection) {
      connection.on("Marquees", (message) => {
        setMarquees(message);
      });
    }
  }, [connection]);

  return (
    <section className="w-[80%] h-8 absolute bottom-0 mx-auto mb-1 backdrop-blur-3xl flex gap-5 items-center">
      <section
        className={cn(
          styles["enable-animation"],
          "w-[70%] h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl"
        )}
        key={marquees}
      >
        <div className={[styles.marquee].join(" ")}>
          <ul className={styles["marquee__content"]}>
            <div className={styles["marquee__item"]}>{marquees}</div>
          </ul>
        </div>
      </section>
      {isAuth && (
        <form
          className="w-[30%] h-full flex gap-5"
          onSubmit={sendMessageHandler}
        >
          <Input
            name="marqueeMessage"
            placeholder="Send message to others"
            className="w-full h-full py-3 px-5 placeholder:text-xl"
            ref={inputRef}
          />
          <Button size="lg" className="h-full">
            {result.isLoading ? <Spinner /> : "Send"}
          </Button>
        </form>
      )}
    </section>
  );
};

export default Marquee;
