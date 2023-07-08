import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductPage = () => {
  const url = 'http://localhost:3004/products'
  const [data, setData] = useState([]) 
  // console.log("data===",data); //initially is empty array
  const navigate = useNavigate()

  const fetchData = async () => {
    const response = await fetch(url)
    const result = await response.json()
    // console.log(result.products);
    // console.log("result===",result);
    setData(result) //update to result and pass in variable "data"
  }
  useEffect(() => {
    fetchData(); //called the function
  }, [])

  const detailPage = (id) => {
    navigate(`productdetailpage/${id}`) 
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        {data.map((item) => {
          return (
            <article
              key={item.id}
              className="shadow-lg text-center p-5"
              onClick={() => detailPage(item.id)}
            >
              <img
                src={item.thumbnail}
                alt=""
                className="h-auto max-h-44 w-full object-fill"
              />

              <div>
                <p>{item.brand}</p>
                <p>{item.title}</p>
                <p>{item.category}</p>
              </div>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default ProductPage
