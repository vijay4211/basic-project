import React from 'react'

const SignUp = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-transparent">
      <div className="shadow-2xl w-5/12 h-60 px-5 py-3 ">
        <div className="flex gap-2 justify-between mb-3">
          <div>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-60 px-3 py-1 border border-black"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-60 px-3 py-1 border border-black"
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="w-full px-3 py-1 border border-black"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Password"
            className="w-full px-3 py-1 border border-black"
          />
        </div>
        <button className="bg-blue-500 py-1 px-4 text-white">Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp
