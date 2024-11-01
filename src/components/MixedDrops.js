import { Draggable, Droppable } from "react-beautiful-dnd"
// import styled from "styled-components";

// const Container = styled.div``;
// const Task = styled.div``;

const BasicUnit= ({item, index})=>{   
  return <Draggable draggableId={(item.id)+"##"+index} index={index} key={index}>
     {
        (provided, snapshot)=>{
           return <div 
              {...provided.draggableProps} 
              {...provided.dragHandleProps}
              ref= {provided.innerRef}
              className={`w-full h-40 mx-2  ${snapshot.isDragging? " bg-red-200":"bg-red-100"} border-2 border-black rounded`}
              >
              {item.name}
           </div>
        }
     }
  </Draggable>
}

const MixedDrops = ({items}) => {
  return (
    <div className='flex flex-col w-full h-full content-center justify-center'>
      <div>dropable</div>
      {/* {console.log(items)} */}
      <Droppable droppableId="mixed" className="w-full min-h-60 flex p-2 gap-2 border-2 border-blue-500"
        direction="horizontal">
      {
          (provided)=>
          <div className='w-full min-h-60 flex justify-center border-2 border-blue-400' 
          ref={provided.innerRef} {...provided.droppableProps}>
            {
              items.map((item, index)=> <BasicUnit item={item} index={index} key={index}/>)
            }
            {provided.placeholder}
          </div>      
      }
      </Droppable>
    </div>
  )
}

export default MixedDrops