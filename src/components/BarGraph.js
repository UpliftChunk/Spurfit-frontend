import React from 'react'

const BarGraph = ({units}) => {
   return (
      <div className='flex items-end h-full gap-1'>
         {
            units.map((unit, index)=><div key={index} 
            className={`bg-blue-300 border border-black`}
            style={{
               flexGrow: `${unit.x}`,
               height: `${unit.y}%`
            }}>
               </div>)
         }
      </div>
   )
}

export default BarGraph