import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
  const { id } = useParams() //access id using useParams
  console.log('id===', id)
  const [value, setValue] = useState({})
  console.log('value====', value)

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    // console.log(response);
    const result = await response.json()
    console.log(result)
    setValue(result) //update
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="border-2">
        <h1>{value.brand}</h1>
        <h3>{value.title}</h3>
        <h3>{value.category}</h3>
        <img src={value.thumbnail} alt="" className="h-60" />
        <div className='flex gap-6 my-5'>
          <h2>{value.price}</h2>
          <button className="bg-red-300 px-3 rounded">Buy</button>
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

export default ProductDetailPage
