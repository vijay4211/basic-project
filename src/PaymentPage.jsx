import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {

const navigation  =  useNavigate()

  const [state, setState] = useState({
    fname: '',
    mobile: '',
    pincode: '',
    locality: '',
    address: '',
    city: '',
    select: '',
    landmark: '',
    alternate_phone_number: '',
  })

  const handleChange = (evt) => {
    const value = evt.target.value
    // console.log("value=====",value);
    // console.log(evt);
    setState({
      ...state,
      [evt.target.name]: value,
    })
  }
  // console.log("state=====>",state);

  const placeOrder = async () => {
    // console.log("state=====>",state);
    const response = await fetch(`http://localhost:3004/address`, {
      method: 'POST',
      body: JSON.stringify(state),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    // console.log("(postData) response=====",response);
    const result = await response.json()
    // console.log("result====>",result);

     navigation('/');
  }

  return (
    <div className="flex gap-6  mx-auto mt-6">
      {/* Left Side */}
      <div className="bg-gray-200 w-8/12">
        <div className="h-30 py-5 px-5  flex justify-between items-center mb-4">
          <div className="">
            <div className="flex gap-3">
              <span className=" bg-gray-300 p-3 w-3 h-3 flex justify-center items-center">
                1
              </span>
              <span>LOGIN</span>
            </div>
            <div className="ml-10">+918007696483</div>
          </div>
          <div>
            <button className="bg-white text-blue-700 font-bold px-4 py-2 rounded">
              CHANGE
            </button>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-blue-600 h-11 flex items-center gap-5 px-8">
            <span className="bg-white w-7 h-7 flex justify-center items-center text-blue-500 font-medium">
              2
            </span>
            <span className="text-white font-medium">DELIVERY ADDRESS</span>
          </div>
          <div className="px-8 py-3">
            <div>
              <input type="radio" />{' '}
              <span className="text-blue-800 font-medium">
                ADD A NEW ADDRESS
              </span>
            </div>
          </div>
          <div className="bg-blue-600 px-6 py-3 flex gap-1 font-medium  mb-4 ml-14">
            <span className="text-white">@</span>
            <span className=" text-white">Use my current location</span>
          </div>
          {/* input form :====================================== */}
          <div className="ml-14 pb-4 max-w-fit">
            <div className="mb-3 flex gap-3">
              <input
                type="text"
                placeholder="Name"
                className="py-3 px-6"
                name="fname"
                value={state.fname}
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="10-digit mobile number"
                className="py-3 px-6"
                name="mobile"
                value={state.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 flex gap-3">
              <input
                type="text"
                placeholder="Pincode"
                className="py-3 px-6"
                name="pincode"
                value={state.pincode}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Locality"
                className="py-3 px-6"
                name="locality"
                value={state.locality}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Address (Area and Street)"
                className="w-full h-24"
                name="address"
                value={state.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 flex gap-3">
              <input
                type="text"
                placeholder="City/District/Town"
                className="py-3 px-6"
                name="city"
                value={state.city}
                onChange={handleChange}
              />
              <select
                name="select"
                onChange={handleChange}
                className="py-3 px-6"
              >
                <option value="">--Select State--</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Gujarat">Gujarat</option>
              </select>
            </div>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                placeholder="Landmark (Optional)"
                className="py-3 px-6"
                name="landmark"
                value={state.landmark}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Alternate Phone (Optional)"
                className="py-3 px-6"
                name="alternate_phone_number"
                value={state.alternate_phone_number}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-orange-300 px-5 py-1 text-black font-medium"
              onClick={placeOrder}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-2/6 max-w-fit">
        <div className="py-2 shadow-lg max-w-fit">
          <div className="py-2 px-6">PRICE DETAILS</div>
          <hr className="mb-3" />
          <div className="flex justify-between py-2 px-6">
            <p>Price (2 items)</p>
            <p>$59,999</p>
          </div>
          <div className="flex justify-between py-2 px-6">
            <p>Delivery Charges</p>
            <p>FREE</p>
          </div>
          <div className="flex justify-between py-2 px-6 mb-3">
            <p>Packaging Charge</p>
            <p>$99</p>
          </div>
          <hr />
          <div className="flex justify-between py-4 px-6 font-semibold">
            <p>Total Payable</p>
            <p>$60,098</p>
          </div>
          <hr />
          <div className="py-2 px-6 text-green-500 font-medium">
            <p>Your Total Savings on this order $1,902</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentPage
