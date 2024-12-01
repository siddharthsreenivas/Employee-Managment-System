import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  // console.log(userData);
  

  return (
    <div className="bg-black/20 mt-8 rounded-lg px-6 py-8">
      <div>
        <div className="bg-violet-600 mb-2 py-2 px-4 flex justify-between rounded-lg items-center gap-4">
            <h2 className="text-sm md:text-lg font-semibold w-1/5 ">Employee Name</h2>
            <h3 className="text-sm md:text-lg w-1/5 ">New Task</h3>
            <h5 className="text-sm md:text-lg w-1/5 ">Active Task</h5>
            <h5 className="text-sm md:text-lg w-1/5 ">Completed</h5>
            <h5 className="text-sm md:text-lg w-1/5 ">Failed</h5>
        </div>
      </div>
      <div className="">
          {userData.map((item) => {
            return (
              <div key={item.id} className="border-2 border-violet-500 mb-2 py-2 px-4 flex justify-between rounded-lg items-center gap-4">
                <h2 className="text-lg font-semibold w-1/5 ">{item.firstName}</h2>
                <h3 className="text-lg w-1/5 text-blue-300">{item.taskNumbers.newTask}</h3>
                <h5 className="text-lg w-1/5 text-yellow-300">{item.taskNumbers.active}</h5>
                <h5 className="text-lg w-1/5 text-green-400">{item.taskNumbers.completed}</h5>
                <h5 className="text-lg w-1/5 text-red-400">{item.taskNumbers.failed}</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllTask;
