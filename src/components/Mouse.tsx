const Mouse = ({ x, y }: { x: number; y: number }) => {
  return (
    <div className="w-20 h-20 mx-5 text-right flex flex-col items-end justify-center gap-2">
      <p className="backdrop-blur-lg">{x}</p>
      <p className="backdrop-blur-lg">{y}</p>
    </div>
  );
};

export default Mouse;
