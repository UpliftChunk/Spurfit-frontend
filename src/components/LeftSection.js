import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { ITEMS } from "../tempData/Basics" 
import BarGraph from './BarGraph'
// import styled from 'styled-components';
// const Container = styled.div``;
// const Task = styled.div``;

const BasicUnit= ({item, index, setItems})=>{   
   const addItem = ()=>{
      setItems((prevItems)=>{
         const new_items = Array.from(prevItems);
         new_items.push(item);
         console.log(new_items);
         
         return new_items;
      })
   }
   return <div className={`transition-all delay-300 w-[30%] h-20`} onClick={addItem}>
      <Draggable draggableId={item.id} index={index} key={index} > 
         {
            (provided, snapshot)=>{
               return <div 
                  {...provided.draggableProps} 
                  {...provided.dragHandleProps}
                  ref= {provided.innerRef}
                  className= {`h-full ${snapshot.isDragging? " bg-red-200":"bg-red-100"} border border-black `}
                  >
                  <BarGraph units={item.units}/>
               </div>
            }
         }
      </Draggable>
   </div>
}

const LeftSection = ({setItems}) => {
  
  return (
    <div className='h-full flex flex-col'>
      <div className="sm:m-2 flex flex-wrap content-center justify-center md:gap-4 gap-1"    >
         Click or drag
      </div>
      <Droppable droppableId="basics" direction='horiztontal'>
         {
            (provided)=>(
               <div className="sm:m-2 flex flex-wrap content-center justify-center md:gap-4 gap-1 min-h-40" 
                  {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {
                     ITEMS.map((item, index)=> <BasicUnit item={item} index={index} key={index} setItems={setItems}/>)
                  }
                  {provided.placeholder}
               </div>
            )
         }
      </Droppable>
    </div>
  )
}

export default LeftSection