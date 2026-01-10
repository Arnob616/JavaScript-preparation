import React from "react";

const Create = () => {
  return (
    <div className="w-full p-6 bg-zinc-900 rounded-xl mt-10">
      <div className="flex gap-6">
        {/* Left Form */}
        <div className="w-1/2 space-y-4">
          {/* Task Title */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-white outline-none"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-white outline-none"
            />
          </div>

          {/* Assign to */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Assign to
            </label>
            <input
              type="text"
              placeholder="employee name"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-white outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Category</label>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-white outline-none"
            />
          </div>
        </div>

        {/* Right Description */}
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Description
            </label>
            <textarea className="w-full h-40 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-sm text-white outline-none resize-none" />
          </div>

          <button className="mt-4 w-full text-white bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-2 rounded-md">
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
