import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import {
  getDataInLocalStorage,
  setDataInLocalStorage,
} from "./utils/localStorage";
import Header from "./components/Others/Header";
import TaskNumber from "./components/Task/TaskNumber";
import TaskList from "./components/Task/TaskList";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  // useEffect(() => {
  //   // setDataInLocalStorage();
  //   getDataInLocalStorage()
  // }, []);

  const {employees, admin} = useContext(AuthContext)
  const data = useContext(AuthContext)

  const [user, setUser] = useState("");

  const handleLogin = (email, password) => {
    if (email === "john.doe@company.com" && password === "ad123") {
      setUser("admin");
    } else if (email === "john.doe1@company.com" && password === "123") {
      setUser("user");
    } else {
      alert("Invalid Credentials");
    }
  };
  console.log(employees, admin);
  console.log(data);

  return (
    <div className="w-full min-h-screen px-10 py-5 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-slate-300 font-mono flex flex-col gap-10 ">
      <Header />
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard /> : user === "user" ? <EmployeeDashboard/> : "" }

      {/* {user === "user"} && <EmployeeDashboard/> */}

      {/* <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme</button> */}

    </div>
  );
};

export default App;
