import { Draggable, Droppable } from "react-beautiful-dnd"
import BarGraph from "./BarGraph"
// import styled from "styled-components";

// const Container = styled.div``;
// const Task = styled.div``;

const BasicUnit= ({item, index, sum})=>{   
  return (<Draggable draggableId={item.id+"##"+index} index={index} key={index} > 
      {
          (provided, snapshot)=>{
            return <div 
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref= {provided.innerRef}
                className= {`h-full w-full `}
              >   
                  <BarGraph units={item.units} snapshot={snapshot}/>
            </div>
          }
      }
    </Draggable>)
}

const MixedDrops = ({items}) => {
  const sum= items.reduce((total, item) => total + item.total, 0);
  return (
    <div className='flex flex-col w-full h-full'>
      <Droppable droppableId="mixed" direction="horizontal">
      {
          (provided)=>
          <div className='w-full h-full flex justify-center gap-1 place-items-end' 
          ref={provided.innerRef} {...provided.droppableProps}>
            {
              items.map((item, index)=> <BasicUnit item={item} index={index} key={index} sum={sum}/>)
            }
            {provided.placeholder}
          </div>      
      }
      </Droppable>

    </div>
  )
}

export default MixedDrops