import LeftSection from './LeftSection.js';
import NavBar from './NavBar.js';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import { ITEMS } from "../tempData/Basics" 
import RightSection from './RightSection.js';


const Rootlayout = () => {
   const [items, setItems] = useState([]);
   // console.log(ITEMS);
   const OnDragEndFunc = (result) => {
      const {destination, source /*, draggableId */} = result;
      console.log("source:", source);
      console.log("destination:", destination);
      if(!destination || destination.droppableId !== "mixed") return;

      let inHand;
      if(source.droppableId === "mixed") inHand = items[source.index];
      else inHand = ITEMS[source.index]; 
   
      setItems((prevItems)=>{
         const new_items= Array.from(prevItems);
         
         if(source.index <destination.index) destination.index++;
         new_items.splice(destination.index, 0, inHand);
         // const adfdio= Array.from(new_items);
         // console.log("added inHand:", adfdio);
         if(source.droppableId==="mixed"){
            if(source.index<=destination.index) new_items.splice(source.index, 1);
            else new_items.splice(source.index+1, 1);
            // console.log("removed source from previous position:", new_items);
         }
         
         // console.log(new_items);
         return new_items;
      })
      
   }
  return (
    <div className='flex flex-col min-h-screen content-center bg-gray-200'>
      <div className='text-cyan-500 bg-black text-2xl font-semibold p-2 sm:py-4 '>
         Workouts
      </div>
      <NavBar/>
      <DragDropContext onDragEnd={OnDragEndFunc}>
         <div className='my-2 mx-1 md:mx-10 flex flex-wrap gap-4'>
            <div className='md:w-1/3 w-full'>
               <LeftSection setItems={setItems}/>
            </div>
            <div className='flex-grow rounded-lg sm:px-2'>
               <RightSection items={items}/>
            </div>
         </div>
      </DragDropContext>
    </div>
  )
}

export default Rootlayout