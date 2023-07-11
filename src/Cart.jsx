import React, { useEffect, useState } from 'react'

const Cart = () => {
  const [data, setData] = useState([])
//   console.log('data====', data)

  //   Get data:---------
  const getData = async () => {
    const response = await fetch('http://localhost:3004/checkout')
    // console.log("response======",response);
    const result = await response.json()
    // console.log("result====",result);
    setData(result)
  }

  useEffect(() => {
    getData()
  }, [])

  
//   Delete Data:-----------------
    const deleteData = async (id) => {
      const response = await fetch(`http://localhost:3004/checkout/${id}`, {
        method: 'DELETE',
        // body: JSON.stringify(data), 
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      // console.log(response);
      const result = await response.json()
    //   console.log('result=====', result)
      getData();
      // setValue(result) //update the result
    }
  

  return (
    <div>
      {data.map((item, id) => {
        return (
          <div key={id}>
            <img src={item.thumbnail} alt="" />
            <h1>{item.title}</h1>
            <h1>{item.category}</h1>
            <h1>{item.brand}</h1>
            <h1>{item.price}</h1>

            <button
              className="bg-red-300 px-4"
              onClick={() => deleteData(item.id)}
            >
              Remove
            </button>
          </div>
        )
      })}
      <button className="bg-blue-200 px-3 rounded">PLACE ORDER</button>
    </div>
  )
}

export default Cart

// brand, category, title, price, thumbnail(single image)
