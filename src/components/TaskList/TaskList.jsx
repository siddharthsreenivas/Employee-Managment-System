import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-1/2 w-full overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 py-5 px-3'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 md:w-[500px] bg-violet-200 rounded-lg'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-500/70 text-sm md:text-base py-1 px-3 rounded'>High</h3>
                <h4 className='font-semibold text-black md:text-base text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-black'>Make a Video</h2>
            <p className='mt-2 text-sm md:text-base text-black/80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi facilis excepturi temporibus, culpa illum pariatur dicta saepe iste laudantium nulla optio iure sint laborum debitis id, voluptate minus nam assumenda!</p>
        </div>
    </div>
  )
}

export default TaskList