import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex flex-col md:flex-row mt-10 w-full gap-5 justify-between '>
        <div className='rounded-xl w-full py-6 px-9 bg-blue-400 flex md:flex-col items-center gap-5 md:items-start md:gap-1'>
            <h2 className='font-bold text-3xl'>0</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='rounded-xl w-full py-6 px-9 bg-green-400 flex md:flex-col items-center gap-5 md:justify-start md:items-start md:gap-1'>
            <h2 className='font-bold text-3xl'>0</h2>
            <h3 className='text-2xl font-semibold'>Completed</h3>
        </div>
        <div className='rounded-xl w-full py-6 px-9 bg-yellow-400 flex md:flex-col items-center gap-5 md:justify-start md:items-start md:gap-1'>
            <h2 className='font-bold text-3xl'>0</h2>
            <h3 className='text-2xl font-semibold'>Accepted</h3>
        </div>
        <div className='rounded-xl w-full py-6 px-9 bg-red-400 flex md:flex-col items-center gap-5 md:justify-start md:items-start md:gap-1'>
            <h2 className='font-bold text-3xl'>0</h2>
            <h3 className='text-2xl font-semibold'>Failed</h3>
        </div>
    </div>
  )
}


export default TaskListNumbers