import React from 'react'

const CreateTask = () => {
  return (
    
    <div className="bg-black/20 mt-8 rounded-lg px-6 py-8">
    <form className="flex items-start flex-col sm:flex-row justify-between lg:gap-20 gap-4 sm:gap-6">

      <div className=" flex flex-col gap-3 w-full sm:w-1/2">
        <div>
          <h3>Task Title</h3>
          <input className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold py-2 px-4 w-full" type="text" placeholder="Make a UI design" />
        </div>

        <div>
          <h3>Date</h3>
          <input className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold py-2 px-4 w-full" type="date" />
        </div>

        <div>
          <h3>Assign To</h3>
          <input className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold py-2 px-4 w-full" type="text" placeholder="Employee Name" />
        </div>

        <div>
          <h3>Category</h3>
          <input className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold py-2 px-4 w-full" type="text" placeholder="Design, Dev, Marketing etc." />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full sm:w-1/2">
        <div>
          <h3>Description</h3>
          <textarea className="bg-transparent border-2 rounded-md mt-1 placeholder:text-gray-500 font-semibold w-full" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="bg-green-700 hover:shadow-lg hover:shadow-green-800/20 py-2 px-4 border-none outline-none rounded-lg font-semibold text-lg">Create Task</button>
      </div>

    </form>
  </div>
  )
}

export default CreateTask