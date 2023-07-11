import React, { useState } from 'react'

const SignUp = () => {
  const [userData, setUserData] = useState({
    fistName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleChanger = (evt) => {
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.target.value);

    const value = evt.target.value
    // console.log(value);

    setUserData({
      ...userData,
      [evt.target.name]: value,
    })
  }

  const registerUser = async()=>{
    // console.log(userData);
  
       // console.log("state=====>",state);
    const response = await fetch(`http://localhost:3004/users`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    // console.log("(postData) response=====",response);
    const result = await response.json()
    // console.log("result====>",result);




  }








  return (
    <div className="w-full h-screen flex justify-center items-center bg-transparent">
      <div className="shadow-2xl lg:w-5/12 h-60 px-5 py-3 ">
        <div className="flex gap-2 justify-between mb-3">
          <div>
            <input
              type="text"
              placeholder="Enter First Name"
              className="px-3 py-1 border border-black"
              name="fistName"
              value={userData.fistName}
              onChange={handleChanger}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="px-3 py-1 border border-black"
              name="lastName"
              value={userData.lastName}
              onChange={handleChanger}
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter Email Address"
            className="w-full px-3 py-1 border border-black"
            name="email"
            value={userData.email}
            onChange={handleChanger}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Enter Password"
            className="w-full px-3 py-1 border border-black"
            name="password"
            value={userData.password}
            onChange={handleChanger}
          />
        </div>
        <button className="bg-blue-500 py-1 px-4 text-white" onClick={registerUser}>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp
