// import styled from 'styled-components';
import LeftSection from './LeftSection.js';
import MixedDrops from './MixedDrops.js';
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
    <div className='flex min-h-screen content-center border-2 border-b-amber-800'>
      <DragDropContext onDragEnd={OnDragEndFunc}>
         <div className='bg-purple-200 w-1/3'>
            <LeftSection/>
         </div>
         <div className='flex-grow flex-col content-center justify-center gap-4 border-2 border-black '>
            <MixedDrops items={items}/>
         </div>
      </DragDropContext>
    </div>
  )
}

export default Rootlayout