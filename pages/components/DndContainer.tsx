'use client'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import styles from '../../styles/DndContainer.module.css'
import Column from "./Column";

const DndContainer = ({columns, setColumns}: any) => {

    /**
     * 드래그 동작시 실행할 함수
     * */
    const handleDragEnd = ({result, columns, setColumns}: any) => {
        if (!result.destination) return;
        const {source, destination} = result;

        console.log(" 작동 >>> " , result)
        // source 전 index , destination 후 index



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
        <DragDropContext onDragEnd={(result) => handleDragEnd({result, columns, setColumns})}>
            <div className={styles.wrap}>
                <Droppable droppableId='board' key='board'>
                    {provided => (
                        <div className={styles.board_wrap} ref={provided.innerRef} {...provided.droppableProps}>
                                {Object.entries(columns).map(([columnId, column], index) => {
                                    return (
                                        <Column columnId={columnId} column={column} index={index} key={index}/>
                                    )
                                })}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

export default DndContainer;