import { items } from "../tempData/Basics" 
const BasicDrops = () => {
  return (
    <div className='flex flex-wrap h-full content-center justify-center'>
      {
         items.map((item)=>(
            <div className={item.className} key={item.id}>
               {item.name}
            </div>
         ))
      }
    </div>
  )
}

export default BasicDrops