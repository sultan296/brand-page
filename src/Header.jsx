import React from 'react'

function Header() {
  return (
    <div>
      <nav className='flex justify-between items-center h-15'>
        <img src="./src/assets/brand_logo.png" alt="" className='size-fit'/>
        <ul className='flex text-md font-semibold gap-5'>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button className='bg-red-600 text-md p-0.5 w-15 h-7 outline-none rounded-[3px] hover:cursor-pointer hover:opacity-70 font-medium'>Login</button>
      </nav>
    </div>
  )
}

export default Header
