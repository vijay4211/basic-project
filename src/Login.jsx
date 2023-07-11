import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  })

const navigator = useNavigate()

  const loginHandler = (evt) => {
    // console.log(evt);

    let value = evt.target.value
    // console.log("value====>",value);
    setLoginUser({
      ...loginUser,
      [evt.target.name]: value,
    })
  }

  const loginData = async () => {
    // console.log(loginUser);

    const response = await fetch(`http://localhost:3004/users`, {
      method: 'GET',
      // body: JSON.stringify(),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    // console.log("(postData) response=====",response);
    const result = await response.json()
    // console.log('result====>', result)

     let result1 = result.find((item)=>{
      // console.log(item)
      return item.email === loginUser.email && item.password === loginUser.password;
  })
  
  console.log('result1=====>',result1);
  if(result1){
    console.log("Login Successfull");
    navigator('/')

  }else{
    console.log("Invalid Login  Details")
  }
  

  }




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
            onChange={loginHandler}
            name="email"
            value={loginUser.email}
          />
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              className="px-2 py-1 w-full mb-4"
              onChange={loginHandler}
              name="password"
              value={loginUser.password}
            />
          </div>
          <button
            className="px-5 py-2 bg-orange-400 flex justify-center text-white font-semibold"
            onClick={loginData}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
