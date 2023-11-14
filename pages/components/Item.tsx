import {Draggable} from "react-beautiful-dnd";
import styles from '../../styles/Item.module.css'

export default function Item({item,index}){
    return(
        <Draggable draggableId={item.id} key={item.id} index={index} >
            {(provided)=>(
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={styles.item}
                >{item.content}</div>
            )}
        </Draggable>
    )
}