import { useRef, useState, useEffect } from 'react';

const UseRefHook = () => {
    const [text, setText] = useState('')
    const prevStateValue = useRef('')
    useEffect(()=>{
        prevStateValue.current = text
    }, [text]) 
    return <>
    <h1>useRef() Hook</h1>
    <input type='text' value={text} onChange={e=>setText(e.target.value)}/>
    <h4>Current State Value is {text} and prev was {prevStateValue.current}</h4>
    </>
}

export default UseRefHook;