import React from "react";
import { AdminDashboardApps } from "../types";
import { Card } from "./ui/card";

const DashBoardAppCard: React.FC<AdminDashboardApps> = ({
  name,
  icon,
  path,
  color,
}) => {
  return (
    <Card
      className="w-full sm:w-[175px] h-[200px] sm:h-[120px] rounded-lg shadow-lg shadow-black/50 hover:scale-105 hover:opacity-75 transition-all duration-300 ease-linear"
      style={{ backgroundColor: color }}
    >
      <a
        href={path}
        className="w-full h-full flex items-center justify-start p-2 gap-4 sm:gap-2"
      >
        <div className="w-24 h-24 flex items-center justify-center">{icon}</div>
        <div className="text-start">
          <h3 className="font-medium text-md">{name}</h3>
        </div>
      </a>
    </Card>
  );
};

export default DashBoardAppCard;
