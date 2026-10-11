import React from "react";
import { NavLink } from "react-router";

const Navabr = () => {
  return (
    <div className="w-full px-10 py-5  flex items-center justify-center gap-10">
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "bg-red-900" : "bg-blue-900"} px-4 py-2 rounded-2xl`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "bg-red-900" : "bg-blue-900"} px-4 py-2 rounded-2xl`
        }
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "bg-red-900" : "bg-blue-900"} px-4 py-2 rounded-2xl`
        }
        to={"/form"}
      >
        Form
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "bg-red-900" : "bg-blue-900"} px-4 py-2 rounded-2xl`
        }
        to={"/card"}
      >
        Card
      </NavLink>
    </div>
  );
};

export default Navabr;
