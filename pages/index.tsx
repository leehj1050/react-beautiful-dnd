'use client'
import DndContainer from "@/pages/components/DndContainer";
import {useEffect, useState} from "react";


export default function Home() {

    const [container , setContainer] = useState([
        { id: "1", content: "할일" },
        { id: "2", content: "진행중" },
        { id: "3", content: "완료" },
     
    ])

    const [post, setPost] = useState([
        { id: "item1", content: "item1" },
        { id: "item2", content: "item2" },
        { id: "item3", content: "item3" },
        { id: "item4", content: "item4" },
        { id: "item5", content: "item5" },
        { id: "item6", content: "item6" },
        { id: "item7", content: "item7" },
        { id: "item8", content: "item8" }
    ])
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(process.browser);
    }, []);


    console.log('>>>>',container)

    return <>{isBrowser ? <DndContainer post={post} setPost={setPost} container={container} setContainer={setContainer}/> : null}</>;
}
