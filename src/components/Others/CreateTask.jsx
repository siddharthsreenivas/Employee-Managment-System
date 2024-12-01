import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    
    setNewTask({title: taskTitle,description: taskDescription,date: taskDate,category,active:false,newTask:true,failed:false,completed:false})

    const data = userData

    data.forEach((elem) => {
      if(assignTo == elem.firstName){
        elem.tasks.push(newTask)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1 
      }
    })

    setUserData(data)

    console.log(userData);
    
    
    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
  }

  return (
    <div className="bg-black/20 mt-8 rounded-lg px-6 py-8">
      <form onSubmit={(e)=>submitHandler(e)} className="flex items-start flex-col sm:flex-row justify-between lg:gap-20 gap-4 sm:gap-6">
        
        <div className=" flex flex-col gap-3 w-full sm:w-1/2">
          <div>
            <h3>Task Title</h3>
            <input value={taskTitle} onChange={(e)=>setTaskTitle(e.target.value)}
              className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold py-2 px-4 w-full"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3>Date</h3>
            <input value={taskDate} onChange={(e)=>setTaskDate(e.target.value)}
              className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold py-2 px-4 w-full"
              type="date"
            />
          </div>

          <div>
            <h3>Assign To</h3>
            <input value={assignTo} onChange={(e)=>setAssignTo(e.target.value)}
              className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold py-2 px-4 w-full"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div>
            <h3>Category</h3>
            <input value={category} onChange={(e)=>setCategory(e.target.value)}
              className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold py-2 px-4 w-full"
              type="text"
              placeholder="Design, Dev, Marketing etc."
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full sm:w-1/2">
          <div>
            <h3>Description</h3>
            <textarea value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}
              className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 py-2 px-4 font-semibold w-full"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button className="bg-green-700 hover:shadow-lg hover:shadow-green-800/20 py-2 px-4 border-none outline-none rounded-lg font-semibold text-lg">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
