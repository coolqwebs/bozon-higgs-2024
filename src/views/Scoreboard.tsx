import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { useGetLeaderBoardQuery } from "@/store/api";
import dayjs from "dayjs";
import { useEffect } from "react";

const Scoreboard = () => {
  const { toast } = useToast();
  const { data, isLoading, error, isError } = useGetLeaderBoardQuery();

  useEffect(() => {
    if (isError) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: (error as IError).data.errors[""][0],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isError]);

  if (isLoading) {
    return (
      <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl flex justify-center items-center backdrop-blur-xl">
        <Spinner />
      </section>
    );
  }

  // console.log(dayjs.isUTC("2024-09-24T15:43:12.444606"));
  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl p-5 backdrop-blur-xl text-2xl overflow-y-auto">
      <Table>
        <TableCaption className="text-2xl caption-top text-left">
          Total count of participants: {data?.totalUserCount}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-2xl">#</TableHead>
            <TableHead className="text-2xl">Name</TableHead>
            <TableHead className="text-right text-2xl">Current Level</TableHead>
            <TableHead className="text-right text-2xl">
              Total Spent Time (minutes)
            </TableHead>
            <TableHead className="text-right text-2xl">
              Last Level Started Time
            </TableHead>
            <TableHead className="text-right text-2xl">
              Used Hints Count
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.leaders?.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="text-2xl">{index + 1}</TableCell>
              <TableCell className="text-2xl">{user.userName}</TableCell>
              <TableCell className="text-right text-2xl">
                {user.levelType}
              </TableCell>
              <TableCell className="text-right text-2xl">
                {user.totalSpentTime}
              </TableCell>
              <TableCell className="text-right text-2xl">
                {user.lastLevelStartedDateTime
                  ? dayjs(user.lastLevelStartedDateTime)
                      .utc(true)
                      .format("DD.MM.YYYY HH:mm")
                  : "---"}
              </TableCell>
              <TableCell className="text-right text-2xl">
                {user.usedHintsCount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default Scoreboard;
