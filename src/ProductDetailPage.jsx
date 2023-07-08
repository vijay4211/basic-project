import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Carousel from './Carousel'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'

const ProductDetailPage = () => {
  const { id } = useParams() //access id using useParams
  // console.log('id===', id) //show the id number
  const [value, setValue] = useState({})
  console.log('value====', value) //initially is empty object

  // get data:------------
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3004/products/${id}`)
    // console.log(response);
    const result = await response.json()
    // console.log('result=====', result)
    setValue(result) //update the result
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Post data(store data in checkout):--------------------
  const postData = async (value) => {
    const response = await fetch(`http://localhost:3004/checkout`, {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    // console.log(response);
    const result = await response.json()
    // console.log('result=====', result)
    // setValue(result) //update the result
  }

  return (
    <>
      <div className="">
        <div className="flex gap-5 w-3/4">
          <div className="border-2 border-red-600">
            <img src={value.thumbnail} alt="" className="h-60" />
            <div className="flex justify-between">
              <button className="bg-red-200 px-2" onClick={()=>postData(value)}>ADD TO CART</button>
              <button className="bg-blue-200 px-2">BUY NOW</button>
            </div>
          </div>
          <div className="shadow-xl w-2/4 font-serif">
            <h1>Brand : {value.brand}</h1>
            <h3>Title : {value.title}</h3>
            <h3>Category : {value.category}</h3>
            <h2>Price : {value.price}</h2>
          </div>
        </div>
      </div>

      <div className="border-2 border-red-300 w-5/6 flex gap-3 mt-5 px-3 h-30 relative">
        {value?.images?.map((item, id) => {
          //id or index
          return (
            <div className="border-2 border-green-900 ml-7">
              <img
                src={item}
                key={id}
                alt=""
                className="w-28 object-fill py-3"
              />
            </div>
          )
        })}
        <button className="px-2 absolute left-4 top-9 w-2">
          <FaLessThan />
        </button>
        <button className="px-2 absolute right-5 top-9">
          <FaGreaterThan />
        </button>
      </div>
    </>
  )
}

export default ProductDetailPage
