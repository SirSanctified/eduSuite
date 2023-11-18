import { adminApps } from "../../constants";
import DashBoardAppCard from "../DashBoardAppCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col gap-8 items-start py-8 md:py-24">
      <h1>Admin Dashboard</h1>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {adminApps.map((app) => (
            <DashBoardAppCard key={app.name} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
