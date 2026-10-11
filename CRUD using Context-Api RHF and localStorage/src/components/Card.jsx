import React from "react";
import { UsersContext } from "../context/UserContext";
import { useNavigate } from "react-router";


const Card = () => {
  const { users, setUsers,setIsEditedUser, isEditedUser } = UsersContext();
  const navigate = useNavigate()


  const handleDelete = (id)=>{
      let arr = users.filter(item => item.id != id)
      // setUsers(prev => prev.filter(item => item.id != id))
      setUsers(arr)
      localStorage.setItem("users", JSON.stringify(arr))
  }

  const handleUpdate = (user)=>{
     setIsEditedUser(user)
     navigate("/form")
  }


  console.log(isEditedUser)

  return (
    <div className="flex gap-10 flex-wrap mt-20">
      {users.length > 0 ? (
        users.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 w-full max-w-md bg-zinc-200 p-6 rounded-xl shadow-md text-black">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-200 border-2 border-blue-600">
              <img
                src={item.url}
                alt={item.name}
                className="w-full h-full object-rcover"
              />
            </div>

            {/* Name + Email */}
            <div className="flex flex-col gap-1 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 break-all">{item.email}</p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                className="flex-1 py-2 bg-blue-600 text-white font-medium rounded-md"
                onClick={()=> handleUpdate(item)}
              >
                Update
              </button>
              <button
                type="button"
                className="flex-1 py-2 bg-red-600 text-white font-medium rounded-md"
                onClick={()=>handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No Users Found</div>
      )}
    </div>
  );
};

export default Card;
