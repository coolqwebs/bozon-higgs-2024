import { useEffect, useState } from "react";

const Mouse = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const handleMouseMove = (event: { clientX: number; clientY: number }) => {
    setCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="w-20 h-20 mx-5 text-right flex flex-col items-end justify-center gap-2">
      <p>{coordinates.x}</p>
      <p>{coordinates.y}</p>
    </div>
  );
};

export default Mouse;
