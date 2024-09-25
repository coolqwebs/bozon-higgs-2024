import { useEffect, useState } from "react";
import styles from "./Marquee.module.scss";
import { cn } from "@/lib/utils";
// import { useSendMarqueeMessageMutation } from "@/store/api";
import { HubConnection } from "@microsoft/signalr";
import { createSignalRConnection } from "@/lib/socket";

const Marquee = () => {
  const [connection, setConnection] = useState<HubConnection | null>(null);
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
        console.log("Message Marquees:", message);
      });
    }
  }, [connection]);

  // const [sendMessage, result] = useSendMarqueeMessageMutation();
  const [reverseAnimation, setReverseAnimation] = useState(false);

  const handleDoubleClick = () => {
    setReverseAnimation((prev) => !prev);
  };

  return (
    <div
      className={cn(
        styles["main__container"],
        "w-[80%] h-8 border-[2px] border-gray-500 dark:border-slate-300 rounded-xl backdrop-blur-3xl"
      )}
    >
      <section className={cn(styles["enable-animation"])}>
        <div
          className={[
            styles.marquee,
            reverseAnimation && styles["marquee--reverse"],
          ].join(" ")}
          onDoubleClick={handleDoubleClick}
        >
          <ul className={styles["marquee__content"]}>
            <div className={styles["marquee__item"]}>
              Блюдо из одной рыбы - уха, блюдо из пяти рыб - ухахахахаха
            </div>
            <div className={styles["marquee__item"]}>
              -... --- --.. --- -. / .... --- --. --. ... / ..--- ----- ..---
              ....-
            </div>
          </ul>

          <ul aria-hidden="true" className={styles["marquee__content"]}>
            <div className={styles["marquee__item"]}>
              Блюдо из одной рыбы - уха, блюдо из пяти рыб - ухахахахаха
            </div>
            <div className={styles["marquee__item"]}>
              -... --- --.. --- -. / .... --- --. --. ... / ..--- ----- ..---
              ....-
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Marquee;
