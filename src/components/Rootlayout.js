// import styled from 'styled-components';
import LeftSection from './LeftSection.js';
import MixedDrops from './MixedDrops.js';
import NavBar from './NavBar.js';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import { ITEMS } from "../tempData/Basics" 

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
    <div className='flex flex-col min-h-screen content-center border-2 border-b-amber-800'>
      <div className='text-cyan-500 bg-black text-2xl font-semibold py-4 px-2'>
         Workouts
      </div>
      <NavBar/>
      <DragDropContext onDragEnd={OnDragEndFunc}>
         <div className='my-2 mx-1 md:mx-10 flex flex-wrap'>
            <div className='bg-purple-200 md:w-1/3 w-full'>
               <LeftSection setItems={setItems}/>
            </div>
            <div className='flex-grow flex-col content-center justify-center gap-4 border-2 border-black '>
               <MixedDrops items={items}/>
            </div>
         </div>
      </DragDropContext>
    </div>
  )
}

export default Rootlayout