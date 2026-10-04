import React, { useEffect } from "react";
import Login from "./components/Auth/Login";
import { setDataInLocalStorage } from "./utils/localStorage";
import Header from "./components/Others/Header";
import TaskNumber from "./components/Task/TaskNumber";
import TaskList from "./components/Task/TaskList";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";

const App = () => {
  useEffect(() => {
    setDataInLocalStorage();
  }, []);

  return (
    <div className="w-full min-h-screen px-10 py-5 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-slate-300 font-mono flex flex-col gap-10 ">
      <Header/>
      {/* <EmployeeDashboard/> */}
      {/* <TaskNumber/>
      <TaskList/> */}
      {/* <Login /> */}
      <AdminDashboard/>
    </div>
  );
};

export default App;
