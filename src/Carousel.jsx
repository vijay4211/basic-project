import React from 'react'

const Carousel = ({item}) => {
  // console.log("item====>",item);
  return (
      <div className="border-2 flex gap-3 mt-5 w-full pl-3 h-30">
        {item}
      </div>
  )
}

export default Carousel
