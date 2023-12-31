'use client'
import DndContainer from "./components/DndContainer";
import {useEffect, useState} from "react";
import {columnData} from "./components/data"



export default function Home() {
    const [columns ,setColumns] = useState(columnData)
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(process.browser);
    }, []);


    return <>{isBrowser ? <DndContainer columns={columns} setColumns={setColumns}/> : null}</>;
}
