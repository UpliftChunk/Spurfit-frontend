import { items } from "../tempData/Mixed.js" 
const MixedDrops = () => {
  return (
    <div className='flex flex-wrap h-full content-center justify-center'>
      {/* {
         items.map((item)=>(
            <div className={item.className} key={item.id}>
               {item.name}
            </div>
         ))
      } */}
      <div>dropable</div>
      <div className="min-w-full border-2 min-h-60 border-blue-500">
         
      </div>
    </div>
  )
}

export default MixedDrops