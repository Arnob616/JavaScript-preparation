import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex mt-10 gap-6">
      <div className="flex-1 bg-green-200 h-32 rounded-xl px-4 py-3">
        <h1 className="text-white font-bold text-2xl">0</h1>
        <h1 className="text-white font-bold text-2xl">New Task</h1>
      </div>

      <div className="flex-1 bg-blue-300 h-32 rounded-xl px-4 py-3">
        <h1 className="text-white font-bold text-2xl">0</h1>
        <h1 className="text-white font-bold text-2xl">New Task</h1>
      </div>

      <div className="flex-1 bg-yellow-400 h-32 rounded-xl px-4 py-3">
        <h1 className="text-white font-bold text-2xl">0</h1>
        <h1 className="text-white font-bold text-2xl">New Task</h1>
      </div>
      <div className="flex-1 bg-red-300 h-32 rounded-xl px-4 py-3">
        <h1 className="text-white font-bold text-2xl">0</h1>
        <h1 className="text-white font-bold text-2xl">New Task</h1>
      </div>
    </div>
  );
};

export default TaskListNumber;
