import React from 'react'

const Login = () => {
  return (
    <div className="flex">
      {/* Left Side */}
      <div className="bg-blue-400 h-screen w-2/5 px-5 py-8">
        <div className="mb-3 text-white">
          <p className="font-semibold text-3xl ">Looks like you're</p>
          <p className="font-semibold text-3xl">new here!</p>
        </div>
        <div className="text-white">
          <p>Sign up with your mobile</p>
          <p>number to get started</p>
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-blue-200 h-screen w-4/5">
        <div className="px-5 py-8 mb-2">
          <input
            type="text"
            placeholder="Email Address"
            className="px-2 py-1 w-full mb-4"
          />
          <div>
            <input type="password" placeholder='Enter Password' className='px-2 py-1 w-full mb-4' />
          </div>
          <button className="px-5 py-2 bg-orange-400 flex justify-center text-white font-semibold">
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
