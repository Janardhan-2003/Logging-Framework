import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
