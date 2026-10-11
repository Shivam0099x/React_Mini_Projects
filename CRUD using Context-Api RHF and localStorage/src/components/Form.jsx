import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { UsersContext} from "../context/UserContext";

const Form = () => {

  const {users, setUsers, isEditedUser, setIsEditedUser} = UsersContext()

  const navigate = useNavigate()


  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues:{
      ...isEditedUser
    }
  });


  const submitt = (data) => {

    if(isEditedUser){
      let arr = users.map(item => item.id === isEditedUser.id ? {...item, ...data} : item)
      // setUsers(prev => prev.map(item => item.id === isEditedUser.id ? {...item, ...data,}: item))
      setUsers(arr)
      localStorage.setItem("users", JSON.stringify(arr))
      setIsEditedUser(null)
    }else{
      let arr = [...users, {...data, id : Date.now()} ]
      // setUsers(prev => ([...prev, {...data, id : Date.now()}]))
      setUsers(arr)
      localStorage.setItem("users", JSON.stringify(arr))
    }

    navigate("/card")

    reset()
  };


  return (
    <div className="w-full p-10 flex items-center justify-center text-black ">
      <form
        onSubmit={handleSubmit(submitt)}
        className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-xl shadow-md"
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md "
        />
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md "
        />
        <input
          type="url"
          placeholder="https://example.com"
          {...register("url")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md "
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-medium rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
