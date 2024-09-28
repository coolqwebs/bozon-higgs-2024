import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Timer = ({ className }: { className?: string }) => {
  const targetDate = new Date("2024-09-29T04:00:00.000Z").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isGameStarted, setIsGameStarted] = useState(false);

  function padNumber(num: number, totalLength: number = 2, paddingChar = "0") {
    const numStr = num.toString();

    return numStr.padStart(totalLength, paddingChar);
  }

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = now - targetDate;
      if (difference > 0) setIsGameStarted(true);
      const days = Math.abs(Math.ceil(difference / (1000 * 60 * 60 * 24)));
      const hours = Math.abs(
        Math.ceil((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = Math.abs(
        Math.ceil((difference % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = Math.abs(Math.ceil((difference % (1000 * 60)) / 1000));

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <div
      className={cn(
        "w-full order-last md:order-none md:w-32 flex gap-1 justify-center items-center text-xl lg:text-2xl",
        className
      )}
    >
      {!isGameStarted && "-"}
      {timeLeft.days > 0 && (
        <>
          <p>{timeLeft.days}</p>:
        </>
      )}
      <p>{padNumber(timeLeft.hours, 2)}</p>:
      <p>{padNumber(timeLeft.minutes, 2)}</p>:
      <p>{padNumber(timeLeft.seconds, 2)}</p>
    </div>
  );
};

export default Timer;
