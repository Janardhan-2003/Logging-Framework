import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-transparent border-r border-slate-800 w-46 text-slate-50 flex flex-col py-8 items-center">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-serif">LoggingF</h1>
      </div>
      <div className="flex flex-col justify-between">
        <a className="h-fit w-46 hover:bg-[#0b2212] text-left px-8 cursor-pointer">
          <p className="py-6">DashBoard</p>
        </a>
        <a className="h-fit w-46 hover:bg-[#0b2212] text-left px-8 cursor-pointer">
          <p className="py-6">My Apps</p>
        </a>
        <a className="h-fit w-46 hover:bg-[#0b2212] text-left px-8 cursor-pointer">
          <p className="py-6">Logs</p>
        </a>
        <a className="h-fit w-46 hover:bg-[#0b2212] text-left px-8 cursor-pointer">
          <p className="py-6">Settings</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
