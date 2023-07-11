import React from 'react'

const PaymentPage = () => {
  return (
    <div className="flex gap-6 w-4/6 mx-auto mt-6">
      {/* Left Side */}
      <div className="bg-gray-200 w-8/12 ">
        <div className="border-2 border-red-500 h-30 py-5 px-5  flex justify-between items-center mb-4">
          <div className="">
            <div className="flex gap-3">
              <span className=" bg-gray-300 p-3 w-3 h-3 flex justify-center items-center border-2 border-green-300">
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
            <spa className="bg-white w-7 h-7 flex justify-center items-center text-blue-500 font-medium">
              2
            </spa>
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
          {/* input form */}
          <div className="ml-14 pb-4 max-w-fit">
            <div className="mb-3 flex gap-3">
              <input type="text" placeholder="Name" className="py-3 px-6" />
              <input
                type="number"
                placeholder="10-digit mobile number"
                className="py-3 px-6"
              />
            </div>
            <div className="mb-3 flex gap-3">
              <input type="text" placeholder="Pincode" className="py-3 px-6" />
              <input type="text" placeholder="Locality" className="py-3 px-6" />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Address (Area and Street)"
                className="w-full h-24"
              />
            </div>
            <div className="mb-3 flex gap-3">
              <input
                type="text"
                placeholder="City/District/Town"
                className="py-3 px-6"
              />
              <select name="" id="" className="py-3 px-6">
                <option value="">--Select State--</option>
              </select>
            </div>
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                placeholder="Landmark (Optional)"
                className="py-3 px-6"
              />
              <input
                type="text"
                placeholder="Alternate Phone (Optional)"
                className="py-3 px-6"
              />
            </div>
            <div className="mb-4">Address Type</div>
            <div className="flex gap-2">
              <input type="radio"/>
              <span>Home (All day delivery)</span>
            </div>
            <div className="flex gap-2">
              <input type="radio" />
              <span>Work(Delivery between 10 AM - 5 PM)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="border-2 border-red-900 w-2/6 max-w-fit">
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
