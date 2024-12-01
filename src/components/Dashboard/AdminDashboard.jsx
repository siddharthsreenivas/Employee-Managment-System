import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="p-10 min-h-screen w-full">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
