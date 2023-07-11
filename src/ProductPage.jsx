import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Get Data:--------------
const ProductPage = () => {
  const url = 'http://localhost:3004/products'
  const [data, setData] = useState([]) 
  // console.log("(ProductPage) data===",data); //initially is empty array
  const navigate = useNavigate()
// (ProductPage)
  const fetchData = async () => {
    const response = await fetch(url)
    const result = await response.json()
    // console.log("(ProductPage) result===",result);
    setData(result) //update to result and pass in variable "data"
  }
  useEffect(() => {
    fetchData(); //called the function
  }, [])

  const detailPage = (id) => { //take parameter is "id"
    navigate(`productdetailpage/${id}`) //Redirect to the ProductDetailPage
  }

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        {data.map((item) => {
          return (
            <article
              key={item.id}
              className="shadow-lg text-center p-5"
              // called detailPage function and passed item.id
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
