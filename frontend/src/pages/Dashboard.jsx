const DashBoard = () => {
  return (
    <>
    <div className='text-white grid grid-cols-2 ml-20'>
        <div className='bg-white/10 backdrop-blur-xl text-center h-75 w-100 rounded-2xl flex flex-col items-center justify-center border-2 border-emerald-900 mb-8 hover:-translate-1 hover:bg-white/8 text-shadow-emerald-700'>
          <h1 className='text-9xl font-bold mb-8'>6</h1>
          <p className='text-4xl text-emerald-700'>Total Applications</p>
        </div>
        <div className='bg-white/10 backdrop-blur-xl text-center h-75 w-100 rounded-2xl flex flex-col items-center justify-center border-2 border-emerald-900 mb-8 hover:-translate-1 hover:bg-white/8 text-shadow-emerald-700'>
          <h1 className='text-9xl font-bold mb-8'>8430</h1>
          <p className='text-4xl text-emerald-700'>Total Logs</p>
        </div>
        <div className='bg-white/10 backdrop-blur-xl text-center h-75 w-100 rounded-2xl flex flex-col items-center justify-center border-2 border-emerald-900 mb-8 hover:-translate-1 hover:bg-white/8 text-shadow-emerald-700'>
          <h1 className='text-9xl font-bold mb-8'>1097</h1>
          <p className='text-4xl text-emerald-700'>Total Errors</p>
        </div>
        <div className='bg-white/10 backdrop-blur-xl text-center h-75 w-100 rounded-2xl flex flex-col items-center justify-center border-2 border-emerald-900 mb-8 hover:-translate-1 hover:bg-white/8 text-shadow-emerald-700'>
          <h1 className='text-9xl font-bold mb-8'>498</h1>
          <p className='text-4xl text-emerald-700'>Total Warnings</p>
        </div>
    </div>
    </>
  )
}

export default DashBoard