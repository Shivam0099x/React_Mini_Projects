import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Clickedd... ${email} ${" "} ${password}`);
    console.log(email, password)

    setEmail("")
    setPassword("")
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className=" p-5 rounded-xl bg-zinc-800 flex items-center justify-center flex-col gap-5">
        <h2 className="text-xl font-bold">Login Page</h2>
        <div className="flex items-center justify-center flex-col gap-3 ">
          <input
            type="text"
            placeholder="email@example.com"
            className="w-96 px-3 py-2 font-semibold outline-none bg-zinc-600 rounded-lg"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            className="w-96 px-3 py-2 font-semibold outline-none bg-zinc-600 rounded-lg"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
          <button
            className="px-3 py-2 bg-blue-800 rounded-lg hover:bg-blue-900 cursor-pointer transition-all "
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
