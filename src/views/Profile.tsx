import { useAppSelector } from "@/store/store";
import dayjs from "dayjs";

const Profile = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-10 backdrop-blur-3xl">
      <ul className="flex flex-col gap-5 text-3xl">
        <li> &gt; Username: {user?.userName}</li>
        <li> &gt; Current Level: {user?.levelType}</li>
        <li>
          &gt; Last Level Started DateTime:{" "}
          {user?.lastLevelStartedDateTime
            ? dayjs(user.lastLevelStartedDateTime)
                .utc(true)
                .format("DD.MM.YYYY HH:mm")
            : "---"}
        </li>
        <li>
          {" "}
          &gt; Total Spent Time: {user?.totalSpentTime}{" "}
          {(user?.totalSpentTime as number) > 1 ? "minutes" : "minute"}
        </li>
        <li> &gt; Used Hints Count: {user?.usedHintsCount}</li>
      </ul>
    </section>
  );
};

export default Profile;
