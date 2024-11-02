import React, { useEffect, useState } from 'react'
import MixedDrops from './MixedDrops';

const RightSection = ({items}) => {
  const percentages = [0, 25, 50, 75, 100];
  const [points, setPoints]= useState([]);
  useEffect(()=>{
   console.log(items);
   setPoints(()=>{
      let total = items.reduce((total,item) => total + item.total, 0);
      if(total===0) total = 3;
      const new_points = [];
      for(let i=0; i<=total; i+=(total/5)) new_points.push(i.toPrecision(2));
      console.log(new_points);
      return new_points;
   })
   console.log("hi");
   
  },[items])
  return (
    <div className='flex flex-col h-full text-gray-400 sm:text-base text-xs'>
      <div className='flex-grow flex gap-3 rounded-t-lg bg-white'>
         <div className='w-3 sm:w-10 flex flex-col-reverse justify-between px-2'>
            {percentages.map((percentage,index) =><div key={index}>{percentage}%</div>)}
         </div>
         <div className='flex-grow px-2 min-h-60'>
            <MixedDrops items={items}/>
         </div>
      </div>
      <div className='flex gap-3 bg-white rounded-b-lg'>
         <div className='w-3 sm:w-10'></div>
         <div className='flex-grow flex justify-between p-2'>
            {points.map((point,index) =><div key={index}>{point}</div>)}
         </div>
      </div>
      <div className='flex flex-col gap-2 my-2'>
         {
            items.map((item,index) =>(
               <div key={index} className='flex flex-col rounded-lg bg-white text-black'>
                  <div className='flex justify-between py-2 sm:px-10 px-2'>
                     <div className='text-xl'>
                        {item.name}
                     </div>
                     <div className="my-auto cursor-pointer fa-solid fa-ellipsis-vertical"></div>
                  </div>
                  <hr className='border-2'/>
                  <div className='flex flex-col py-2 sm:px-10 px-2 gap-2'>
                     {
                        item.units.map((unit, index)=>(
                           <div key={index} className='rounded-lg bg-blue-100 p-2 flex justify-between'>
                              <div className='my-auto'>Run</div>
                              <div className='flex'>
                                 <div className='rounded-lg bg-white sm:mx-2 p-2 sm:text-sm'>{unit.x} KMS</div>
                                 <div className='rounded-lg bg-white mx-1 p-2 sm:text-sm'>
                                    <div className="my-auto cursor-pointer fa-solid fa-ellipsis-vertical"></div>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                  </div>
               </div>))
         }
      </div>
    </div>
  )
}

export default RightSection