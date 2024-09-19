import { useState } from "react";
import styles from "./Marquee.module.scss";

const Marquee = () => {
  const [reverseAnimation, setReverseAnimation] = useState(false);

  const handleDoubleClick = () => {
    setReverseAnimation((prev) => !prev);
  };

  return (
    <div className={styles["main__container"]}>
      <section className={styles["enable-animation"]}>
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
