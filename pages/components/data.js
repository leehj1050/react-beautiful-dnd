import {v4 as uuidv4} from 'uuid';


export const data = [
    {id: 'item1', content: "item1"},
    {id: "item2", content: "item2"},
    {id: "item3", content: "item3"},
    {id: "item4", content: "item4"},
    {id: "item5", content: "item5"},
    {id: "item6", content: "item6"},
    {id: "item7", content: "item7"},
    {id: "item8", content: "item8"}
]

export const data2=[
    {id:"item30" , content:"item30"},
    {id: "item40" , content:"item40"}
]

export const columnData = {
    ["컬럼id_1"]: {
        title: '할일',
        items: data,
    },
    ["컬럼id_2"]: {
        title: '진행중',
        items: data2,
    },
}

