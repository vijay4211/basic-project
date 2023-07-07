import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ProductPage = () => {
  const url = "https://dummyjson.com/products"
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const fetchData = async()=>{
      const response = await fetch(url);
      const result = await response.json()
      console.log(result.products);
      setData(result.products);
  }
  useEffect(()=>{
      fetchData();
  },[])


  const detailPage = (id) =>{
    navigate(`productdetailpage/${id}`);
  }

  return (
  <>
    <div className='grid grid-cols-4 gap-5'>
      {
        data.map((item)=>{
          return(
            <article key={item.id} className='shadow-lg' onClick={()=> detailPage(item.id)}>
              <div>
                <p>{item.brand}</p>
                <p>{item.title}</p>
                <p>{item.category}</p>
              </div>
              <div>
                <img src={item.thumbnail} alt="" />
              </div>
            </article>
          )
        })
      }
    </div>
  </>
  )
}

export default ProductPage
