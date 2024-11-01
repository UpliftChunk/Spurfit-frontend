import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { ITEMS } from "../tempData/Basics" 

// import styled from 'styled-components';
// const Container = styled.div``;
// const Task = styled.div``;

const BasicUnit= ({item, index})=>{   
   return <Draggable draggableId={item.id} index={index} key={index}>
      {
         (provided, snapshot)=>{
            return <div 
               {...provided.draggableProps} 
               {...provided.dragHandleProps}
               ref= {provided.innerRef}
               className={`w-full h-full transition-all delay-300 ${snapshot.isDragging? " bg-red-200":"bg-red-100"}  `}
               >
               {item.name}
            </div>
         }
      }
   </Draggable>
}

const LeftSection = () => {
  
  return (
    <div className='h-full flex flex-wrap content-center justify-center gap-4 '>
      {
         ITEMS.map((item, index)=>(
            <div className="bg-blue-200 md:w-40 md:h-40 rounded border border-black" key={index}>
               <Droppable droppableId={item.id +"#"+ index} className="p-2">
                  {
                     (provided)=>(
                        <div className="m-2 h-[90%] border-2 border-black" 
                           {...provided.droppableProps}
                           ref={provided.innerRef}
                        >
                           <BasicUnit item={item} index={index}/>
                         
                        </div>
                     )
                  }
               </Droppable>
            </div>
         ))
      }
    </div>
  )
}

export default LeftSection