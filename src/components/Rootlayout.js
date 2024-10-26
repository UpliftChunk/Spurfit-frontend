import BasicDrops from './BasicDrops.js';
import MixedDrops from './MixedDrops.js';
const Rootlayout = () => {
  return (
    <div className='flex min-h-screen content-center border-2 border-b-amber-800'>
      <div className='bg-purple-200 w-1/3'>
         <BasicDrops/>
      </div>
      <div className='flex-grow border '>
         <MixedDrops/>
      </div>
    </div>
  )
}

export default Rootlayout