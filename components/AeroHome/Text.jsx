/* eslint-disable react/jsx-key */
import React from 'react'
import Image from 'next/image'

export const Text = () => {
  return (
    <div>
    <><div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <Image src={Mockup} className="w-full" alt=""/>
  </div>
  <div id="item2" className="carousel-item w-full">
    <Image src={Mockup} className="w-full" alt="" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <Image src={Mockup} className="w-full" alt="" />
  </div>
</div><div className="flex justify-center w-full py-2 gap-2">
    <a href="#item1" className="btn btn-xs">
      1
    </a>
    <a href="#item2" className="btn btn-xs">
      2
    </a>
    <a href="#item3" className="btn btn-xs">
      3
    </a>
  </div></>
    
    </div>
  )
}

 
 