import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-transparent border-b border-slate-800 text-slate-50 flex items-center justify-between px-4 py-3'>
        <div>
            <h1>Active tabs</h1>
        </div>
        <div className='flex mx-4 px-4 justify-between items-center'>
            <p className='mx-4'>Home</p>
            <p className='mx-4'>DashBoard</p>
            <button className='bg-slate-950 w-26 h-10 rounded-full text-center cursor-pointer' type='button'>LogOut</button>
        </div>
    </div>
  )
}

export default Navbar