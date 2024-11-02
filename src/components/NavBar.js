import React from 'react'

const NavBar = () => {
  return (
   <div className='my-5 mx-1 md:mx-10 flex justify-between'>
      <div className='flex gap-2 content-center'>
         <i className="my-auto cursor-pointer fa-solid fa-arrow-left"></i>
         <input type='text' name='name' className='outline-none  border-none md:text-2xl w-28 md:w-40' defaultValue={"Run Workout"}/>
         <label htmlFor='name' className="my-auto cursor-pointer fa-solid fa-pencil"/>
      </div>
      <div className='px-2 py-1 font-semibold cursor-pointer sm:hover:scale-110 transition-all rounded-md bg-purple-500 text-white text-ellipsis sm:scale-100 scale-75'>
         Save workout
      </div>
   </div>   
  )
}

export default NavBar