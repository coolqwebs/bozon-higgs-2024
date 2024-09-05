import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Scoreboard = () => {
  return (
    <section className="w-full h-full border-[2px] border-gray-500 dark:border-slate-300 rounded-xl py-5 px-10 backdrop-blur-sm">
      <Table>
        <TableCaption>A list of participants</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Levels</TableHead>
            <TableHead className="text-right">Total Spent Time</TableHead>
            <TableHead className="text-right">
              Last Level Started Time
            </TableHead>
            <TableHead>Hint Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Cucold</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-right">2:30</TableCell>
            <TableCell className="text-right">13:12</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Cucold</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-right">2:30</TableCell>
            <TableCell className="text-right">13:12</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Cucold</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-right">2:30</TableCell>
            <TableCell className="text-right">13:12</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>Cucold</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-right">2:30</TableCell>
            <TableCell className="text-right">13:12</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell>Cucold</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-right">2:30</TableCell>
            <TableCell className="text-right">13:12</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>6</TableCell>
            <TableCell>Cucold</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-right">2:30</TableCell>
            <TableCell className="text-right">13:12</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>7</TableCell>
            <TableCell>Cucold</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="text-right">2:30</TableCell>
            <TableCell className="text-right">13:12</TableCell>
            <TableCell>1</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
};

export default Scoreboard;
