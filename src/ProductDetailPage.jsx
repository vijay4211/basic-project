import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const { id } = useParams() //access id using useParams
  console.log('id===', id)
  const [value, setValue] = useState({})
  console.log('value====', value)

  // get data
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3004/products/${id}`)
    // console.log(response);
    const result = await response.json()
    console.log("result=====",result)
    setValue(result) //update
  }

  useEffect(() => {
    fetchData()
  }, [])

  // Post data(store data)
  const postData = async(value)=>{
const response = await fetch(`http://localhost:3004/checkout`, {
  method: 'POST',
  body: JSON.stringify(value),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
    // console.log(response);
    const result = await response.json()
    console.log("result=====",result)
    // setValue(result) //update
}

  return (
    <>
      <div className="border-2">
        <h1>{value.brand}</h1>
        <h3>{value.title}</h3>
        <h3>{value.category}</h3>
        <img src={value.thumbnail} alt="" className="h-60" />
        <div className='flex gap-6 my-5'>
          <h2>{value.price}</h2>
          <button className="bg-red-300 px-3 rounded" onClick={()=> postData(value)}>Buy</button>
        </div>
      </div>

      <div className="border-2 flex h-32">
        {value?.images?.map((item) => {
          return <img src={item} alt="" />
        })}
      </div>
    </>
  )
}

export default ProductDetailPage;
