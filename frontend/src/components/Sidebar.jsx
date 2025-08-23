import React from 'react'

const Sidebar = () => {
  return (
    <div className='bg-transparent border-r border-slate-800 w-46 text-slate-50 flex flex-col py-8 items-center'>
        <div className='mb-8'>
            <h1 className='text-2xl font-bold font-serif'>LoggingF</h1>
        </div>
        <div className='flex flex-col justify-between'>
            <p className='mb-10'>DashBoard</p>
            <p className='mb-10'>My Apps</p>
            <p className='mb-10'>Logs</p>
            <p className='mb-10'>Settings</p>
        </div>
    </div>
  )
}

export default Sidebar