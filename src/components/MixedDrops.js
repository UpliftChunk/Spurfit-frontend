import { Draggable, Droppable } from "react-beautiful-dnd"
import BarGraph from "./BarGraph"
// import styled from "styled-components";

// const Container = styled.div``;
// const Task = styled.div``;

const BasicUnit= ({item, index})=>{   
  return <div className={`transition-all delay-300 flex-grow`} >
    <Draggable draggableId={item.id+"##"+index} index={index} key={index} > 
      {
          (provided, snapshot)=>{
            return <div 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                ref= {provided.innerRef}
                className= {`h-full ${snapshot.isDragging? " bg-gray-200":"bg-gray-100"} border border-black `}
                >
                <BarGraph units={item.units}/>
            </div>
          }
      }
    </Draggable>
  </div>
}

const MixedDrops = ({items}) => {
  return (
    <div className='flex flex-col w-full h-full content-center justify-center'>
      <div>dropable</div>
      {/* {console.log(items)} */}
      <Droppable droppableId="mixed" direction="horizontal">
      {
          (provided)=>
          <div className='w-full min-h-60 flex border-2 border-blue-400 gap-1' 
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