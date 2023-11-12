'use client'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {v4 as uuidv4} from 'uuid';
import '@atlaskit/css-reset';
import styles from '../../styles/DndContainer.module.css'
import Item from "./Item";
import {useState} from "react";
import Column from "./Column";

const DndContainer = ({columns, setColumns}: any) => {

    const handleDragEnd = ({result, columns, setColumns}: any) => {
        if (!result.destination) return;
        const {source, destination} = result;
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };

    return (
        <>
            <DragDropContext onDragEnd={(result) => handleDragEnd({result, columns, setColumns})}>
                        <div className={styles.wrap}>
                            {Object.entries(columns).map(([columnId, column], index) => {
                                return (
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {provided => (
                                            <div
                                                ref={provided.innerRef} {...provided.droppableProps}
                                                className={styles.container}>
                                                {column.items.map((item, idx) => (
                                                    <Item key={item} item={item} index={idx}/>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )
                                        }
                                    </Droppable>
                                )
                            })}
                        </div>
            </DragDropContext>
        </>
    )
}


// <div>
//                                                 <button onClick={() => {
//                                                     setColumns({
//                                                         ...columns, [uuidv4()]: {
//                                                             title: '완료',
//                                                             items: [],
//                                                         }
//                                                     })
//                                                 }}>+
//                                                 </button>
//                                             </div>
export default DndContainer;