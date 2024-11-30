import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 md:w-[500px] bg-violet-200 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="bg-red-500/70 text-sm md:text-base py-1 px-3 rounded">
          {data.category}
        </h3>
        <h4 className="font-semibold text-black md:text-base text-sm">
          {data.date}
        </h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-black">{data.title}</h2>
      <p className="mt-2 text-sm md:text-base text-black/80">
        {data.description}
      </p>
      <div className="mt-4">
        <button className="bg-red-400 py-1 px-2 w-full text-base rounded">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
