import { v4 as uuidv4 } from 'uuid';


export const data = [
    { id: "1", content: "item1" },
    { id: "2", content: "item2" },
    { id: "3", content: "item3" },
    { id: "4", content: "item4" },
    { id: "5", content: "item5" },
    { id: "6", content: "item6" },
    { id: "7", content: "item7" },
    { id: "8", content: "item8" }
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

