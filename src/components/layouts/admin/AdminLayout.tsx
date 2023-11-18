import React, { ReactElement, useState } from "react";
import {
  MdBook,
  MdCalendarViewMonth,
  MdCalendarViewWeek,
  MdCategory,
  MdChairAlt,
  MdGrade,
  MdLibraryBooks,
  MdPeople,
  MdPeopleAlt,
  MdSchool,
  MdSettings,
} from "react-icons/md";
import { FaBars, FaChevronLeft } from "react-icons/fa";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";

type AdminLayoutProps = {
  children: ReactElement;
};
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="relative transition-all duration-500 ease-linear">
      <nav
        className={`${
          showNav
            ? "w-40"
            : "w-15"
        } fixed block top-0 left h-full bg-blue-200 px-4 rounded-r-md overflow-y-scroll no-scrollbar`}
      >
        {!showNav ? (
        <Button
          onClick={() => setShowNav(true)}
          className="absolute top-4 left-[3.3rem] z-10 text-4xl rounded-full py-4 px-1 cursor-pointer bg-transparent hover:shadow-lg hover:scale-110 text-black hover:bg-transparent"
        >
          <FaBars />
        </Button>
      ) : (
        <Button
          onClick={() => setShowNav(false)}
          className="absolute top-4 left-[9rem] z-10 text-4xl rounded-full py-4 px-1 cursor-pointer bg-transparent hover:shadow-lg hover:scale-110 text-black hover:bg-transparent"
        >
          <FaChevronLeft />
        </Button>
      )}
        <div className=" flex flex-col gap-2 items-center justify-center mt-16">
          <span className="w-max mx-auto p-4 rounded-full bg-teal-300">
            <MdSchool size={36} color="brown" />
          </span>
          <span className={`${showNav ? "text-3xl font-bold text-gray-800" : "hidden"}`}>EduSuite</span>
        </div>
        <Separator className="bg-gray-500 my-4" />
        <ul className={`${showNav ? "items-start justify-start" : "items-center justify-center" } flex flex-col gap-4`}>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdCategory />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Dashboard</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdPeople />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Students</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdPeopleAlt />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Teachers</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdBook />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Courses</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdChairAlt />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Classes</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdGrade />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Grades</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdCalendarViewMonth />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Attendance</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdCalendarViewWeek />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Timetable</a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-blue-900">
              <MdLibraryBooks />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Library</a>
          </li>
          <Separator className="bg-gray-500" />
          <li className="flex items-center gap-2">
            <a href="#" className="text-4xl text-gray-700">
              <MdSettings />
            </a>
            <a href="#" className={`${showNav ? "block" : "hidden"}`}>Settings</a>
          </li>
        </ul>
      </nav>
      <div className={`${ showNav ? "ml-[10rem]" : "ml-[5.6rem]"} px-4 sm:px-6 md:px-8`}>{children}</div>
    </div>
  );
};

export default AdminLayout;
