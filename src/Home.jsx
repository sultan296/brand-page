import React from 'react'

function Home() {
  return (
    <div className='flex columns-2 homes'>
      <div className=''>
        <h1 className='font-extrabold text-8xl leading-'>YOUR FEET DESERVE THE BEST</h1>
        <p className='text-lg'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />SHOES.</p>
        <div className='flex gap-5 button'>
            <button className='bg-red-600 text-sm w-25 rounded-[3px] h-9 hover:cursor-pointer hover:opacity-70 font-medium'>Shop Now</button>
            <button className='bg-white border-black border-[0.5px] text-sm w-25 rounded-[3px] h-9 hover:cursor-pointer hover:opacity-70 font-medium'>Category</button>
        </div>
        <span className='text-sm'>Also Available On</span>
        <div className='flex gap-5 shopping-icon '>
        <img src="./assets/flipkart.png" alt="" className='size-10 hover:cursor-pointer' />
        <img src="./assets/amazon.png" alt="" className='size-10 hover:cursor-pointer' /> 
        </div>
      </div >
      <div className='grid place-items-center shoe'>
        <img src="./assets/shoe_image.png" alt="" className='w-6xl amazon hover:cursor-pointer hover:opacity-90' />
      </div>
    </div>
  )
}

export default Home
