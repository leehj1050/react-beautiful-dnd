import { v4 as uuidv4 } from 'uuid';


export const data = [
    { id: uuidv4 (), content: "item1" },
    { id: uuidv4 (), content: "item2" },
    { id: uuidv4 (), content: "item3" },
    { id: uuidv4 (), content: "item4" },
    { id: uuidv4 (), content: "item5" },
    { id: uuidv4 (), content: "item6" },
    { id: uuidv4 (), content: "item7" },
    { id: uuidv4 (), content: "item8" }
]

export const columnData = {
    [uuidv4()]: {
        title: '할일',
        items: data,
    },
    [uuidv4()]: {
        title: '진행중',
        items: [],
    },
}

