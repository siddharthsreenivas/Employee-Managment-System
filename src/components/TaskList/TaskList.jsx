import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-1/2 w-full overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 py-5 "
    >
      
      {data.tasks.map((elem, id)=>{
        if(elem.active){
          return <AcceptTask key={id} data={elem} />
        }
        if(elem.newTask){
          return <NewTask key={id} data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={id} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={id} data={elem}/>
        }

      })}


    </div>
  );
};

export default TaskList;
