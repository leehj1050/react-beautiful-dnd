import {Draggable} from "react-beautiful-dnd";
import styles from "../../styles/DndContainer.module.css";
import Item from "./Item";

export default function Column({columnId, column, index, columns, setColumns}) {
    return (
        <Draggable draggableId={columnId} key={columnId} index={index}>

        </Draggable>
    )
}