import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default class AppDragDropDemo extends Component {
    state = {
    }

    renderText = (item, index) => {
        return <Draggable
            key={index}
            draggableId={index + ' '}
            index={index}>

            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >

                </div>
            )}

        </Draggable>
    }
    render() {
        return (<DragDropContext >
            <div className='w3-container w3-margin'>
                <div className='w3-container w3-card w3-center'>
                    <h2>Fill in the blanks</h2>
                    <div className='w3-container w3-card w3-theme'>
                        <h4> 1. <Droppable droppableId="droppable" mode="virtual">....................</Droppable> and <Droppable droppableId="droppable" mode="virtual">....................</Droppable> are the two seperators used with PRINT statement.</h4>
                    </div>
                    <div className='w3-container w3-card w3-theme'>
                        <h3>Help Box</h3>

                    </div>
                </div>
                <div className='w3-container'></div>

            </div>
        </DragDropContext>
        );
    }
}