import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links=[
    {to:'/', title:"Dashboard"},
    {to:'/myapps', title:'My Apps'},
    {to:'/logs', title:'Logs'},
    {to:'/settings', title:'Settings'}
  ]
  return (
    <div className="bg-transparent border-r border-slate-800 w-46 text-slate-50 flex flex-col py-8 items-center">
      <div className="mb-8">
        <h1 className="text-2xl font-bold font-serif">LoggingF</h1>
      </div>
      <ul className="flex flex-col justify-between w-full">
        {links.map(({ to, title }) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) =>
              `h-fit w-46 text-left px-8 cursor-pointer transition 
              ${isActive ? "bg-[#0b2212] border-l-4 border-green-500" : "hover:bg-[#0b2212]"}`
            }
          >
            <li>
              <p className="py-6">{title}</p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
