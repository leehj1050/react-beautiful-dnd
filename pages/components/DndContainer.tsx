import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import styles from '../../styles/DndContainer.module.css'

const DndContainer = ({ post, setPost ,container ,setContainer }: any) => {

    const handleDragEnd = (result: any) => {
        if (!result.destination) return;
        const items = [...container];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setContainer(items);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="cardlists">
                {provided => (
                    <div className={styles.wrap}{...provided.droppableProps} ref={provided.innerRef} >
                        {container.map((e: any, i: number) => (
                            <Draggable draggableId={`test-${e.id}`} index={i} key={`test-${e.id}`}>
                                {(provided, snapshot) => {
                                    console.log("드래그 컨데이너>>> " , provided)
                                    return (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            className={styles.container}
                                        >
                                            {e.content}
                                        </div>
                                    );
                                }}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DndContainer;