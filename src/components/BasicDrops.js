import styled from "styled-components"
import { ITEMS } from "../tempData/Basics" 
import { Draggable } from "react-beautiful-dnd"

const Task = styled.div``;
const BasicDrops = () => {
  return (
    <div className='flex flex-wrap h-full content-center justify-center gap-4'>
      {
         ITEMS.map((item, key)=>(
            <Draggable draggableId={item.id} index={key} key={key}>
               {
                  (provided)=>{
                     return <Task 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}
                        ref= {provided.innerRef}
                        className= 'bg-blue-300 min-w-40 min-h-40 rounded border-2 border-black'
                        >
                        {item.name}
                     </Task>
                  }
               }
            </Draggable>
         ))
      }
    </div>
  )
}

export default BasicDrops