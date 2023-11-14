import styles from "../../styles/DndContainer.module.css";
import {Draggable, Droppable} from "react-beautiful-dnd";
import Item from "./Item";

export default function Column({columnId, column, index}) {
    return (
        <div className={styles.board}>
            <Draggable draggableId={columnId} key={columnId} index={index} >
                {provided => (
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps} className={styles.container_wrap}>
                        <div className={styles.title}>{column.title}</div>
                        <Droppable droppableId={columnId} key={columnId}>
                            {provided => (
                                <div
                                    ref={provided.innerRef} {...provided.droppableProps}
                                    className={styles.container}>

                                    {column.items.map((item, index) => (
                                        <Item key={item} item={item} index={index}/>
                                    ))}

                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                )}
            </Draggable>
        </div>
    )
}